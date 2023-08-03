import { CharactersProfEntity } from '../entities/charecters-profile.entity';

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

export class CharactersProfeDto {
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: [];
  url: string;
  created: Date;
}
