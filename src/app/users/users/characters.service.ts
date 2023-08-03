import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CharactersProfRepo } from './repo/charactersProf.repo';

@Injectable()
export class CharactersService {
  constructor(
    private readonly charactersProfileRepo: CharactersProfRepo,
    private readonly httpService: HttpService,
  ) {}
  async getCharacters() {
    return this.charactersProfileRepo.getList();
  }
  async addCharacters() {
    const response = await this.httpService.axiosRef.get(
      'http://localhost:3000/characters',
    );
    return await this.charactersProfileRepo.addCharactersProfiles(
      response.data,
    );
  }
}
