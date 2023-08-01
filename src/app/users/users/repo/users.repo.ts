import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { UsersEntity } from '../entities/users.entity';
@Injectable()
export class UsersRepo {
  constructor(private readonly httpService: HttpService) {}
  async getListByPage(page: number): Promise<UsersEntity[]> {
    const response = await this.httpService.axiosRef.get(
      `/character?page=${page}`,
    );

    console.log(response.data);

    if (response.data && response.data.results) {
      return response.data.results;
    }

    return response.data;
  }

  async getList(): Promise<UsersEntity[]> {
    const response = await this.httpService.axiosRef.get('/character');

    console.log(response.data);

    if (response.data && response.data.results) {
      return response.data.results;
    }

    return response.data;
  }

  async getId(id: number): Promise<UsersEntity[]> {
    const response = await this.httpService.axiosRef.get(`/character?id${id}`);

    console.log(response.data);

    if (response.data && response.data.results) {
      return response.data.results;
    }

    return response.data;
  }
}
