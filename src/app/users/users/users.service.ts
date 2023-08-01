import { Injectable } from '@nestjs/common';
import { UsersRepo } from './repo/users.repo';

@Injectable()
export class UsersService {
  constructor(private readonly UsersRepo: UsersRepo) {}

  async getCharactersByPage(page: number) {
    return this.UsersRepo.getListByPage(page);
  }

  async getCharactersByID(id: number) {
    return this.UsersRepo.getId(id);
  }

  async getCharacters() {
    return this.UsersRepo.getList();
  }
}
