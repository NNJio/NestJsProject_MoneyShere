import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserDTO } from 'src/dto/user.dto';
import { UserService } from './user.service';
import { query } from 'express';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {

    }
    @Get()
    getUserAll(@Query('name') userName?: string): UserDTO[] {
        if (userName) {
            return this.userService.findByCondition((user) => user.name.includes(userName),);
        }
        return this.userService.findAll();
    }
    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.findById(Number(id));
    }
}
