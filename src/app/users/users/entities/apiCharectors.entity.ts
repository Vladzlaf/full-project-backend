import { Entity } from '@mikro-orm/core';

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

@Entity({ abstract: true })
export class ApiCharacterEntity {
  id!: number;
  name!: string;
  status!: string;
  species!: string;
  type!: string;
  gender!: string;
  origin!: Origin;
  location!: Location;
  image!: string;
  episode!: string[];
  url!: string;
  created!: string;
}
