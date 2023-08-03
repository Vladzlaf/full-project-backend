import { Controller, Get, Post } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('characters')
export class CharactersController {
  constructor(private readonly characterService: CharactersService) {}
  @Get()
  async getCharactersInfo() {
    const result = await this.characterService.getCharacters();
    return result;
  }

  @Post()
  async addCharactersInfo() {
    return await this.characterService.addCharacters();
  }
}
