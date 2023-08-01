import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './dtos/users.dto';

@Controller('characters')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get('/:page')
  async getCharactersInfoByPage(@Param('page', ParseIntPipe) page: number) {
    const result = await this.UsersService.getCharactersByPage(page);

    return UsersDto.fromEntities(result);
  }

  @Get('/:id')
  async getCharactersInfoByID(@Param('id', ParseIntPipe) id: number) {
    const result = await this.UsersService.getCharactersByID(id);

    return UsersDto.fromEntities(result);
  }

  @Get('')
  async getCharactersInfo() {
    console.log('service');

    const result = await this.UsersService.getCharacters();

    return UsersDto.fromEntities(result);
  }
}
