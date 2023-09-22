import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/dto/user.dto';

@Injectable()
export class UserService {
    private users: UserDTO[] = [
        { name: 'new', id: 1, tal: '091-4041141' },
        { name: 'new world', id: 2, tal: '091-4041142' },
        { name: 'newbie', id: 3, tal: '091-4041143' },
        { name: 'chop', id: 4, tal: '091-4041144' },
        { name: 'top', id: 5, tal: '091-4041145' },
    ]
    findAll(): UserDTO[] {
        return this.users

    }
    findById(id: number) {
        return this.users.find((u) => u.id == id);
    }
    findByCondition(predicate: (user: UserDTO) => boolean) {
        return this.users.filter(u => predicate(u));
    }
}
