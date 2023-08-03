import { Injectable } from '@nestjs/common';
import { EntityRepository, EntityManager } from '@mikro-orm/postgresql';
import { HttpService } from '@nestjs/axios';
import { CharactersProfEntity } from '../entities/charecters-profile.entity';
import { ApiCharacterEntity } from '../entities/apiCharectors.entity';
@Injectable()
export class CharactersProfRepo extends EntityRepository<CharactersProfEntity> {
  constructor(
    private readonly httpService: HttpService,
    private readonly manager: EntityManager,
  ) {
    super(manager, CharactersProfEntity);
  }
  async getList(): Promise<ApiCharacterEntity[]> {
    const response = await this.httpService.axiosRef.get('/character');

    console.log(response.data);

    if (response.data && response.data.results) {
      return response.data.results;
    }

    return response.data;
  }

  async addCharactersProfiles(characters: ApiCharacterEntity[]): Promise<void> {
    const charactersProfilesPromises = characters.map(async (characterApi) => {
      const characterProfileEnt = this.create({
        id: characterApi.id,
        name: characterApi.name,
        status: characterApi.status,
        species: characterApi.species,
        type: characterApi.type,
        gender: characterApi.gender,
        origin: characterApi.origin,
        location: characterApi.location,
        image: characterApi.image,
        episode: characterApi.episode,
        url: characterApi.url,
        created: characterApi.created,
        characters_table: {
          id: characterApi.id,
          name: characterApi.name,
        },
      });
      return this.persistAndFlush(characterProfileEnt);
    });
    await Promise.all(charactersProfilesPromises);
  }
}
