import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { CharactersProfEntity } from './entities/charecters-profile.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { CharactersProfRepo } from './repo/charactersProf.repo';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [CharactersProfEntity],
    }),
    HttpModule.registerAsync({
      useFactory: () => ({
        baseURL: process.env.RICKANDMORTY_API,
      }),
    }),
  ],
  controllers: [CharactersController],
  providers: [CharactersService, CharactersProfRepo],
})
export class CharactersModule {}
