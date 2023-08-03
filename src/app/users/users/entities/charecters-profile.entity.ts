import {
  Entity,
  Property,
  OneToOne,
  PrimaryKey,
  JsonType,
} from '@mikro-orm/core';
import { CharactersProfRepo } from '../repo/charactersProf.repo';
import { CharactersEntity } from './charecters.entity';

@Entity({
  tableName: 'characters_profile_table',
  customRepository: () => CharactersProfRepo,
})
export class CharactersProfEntity {
  @PrimaryKey({ nullable: false })
  id!: number;
  @Property({ name: 'name' })
  name!: string;
  @Property({ name: 'status' })
  status!: string;
  @Property({ name: 'species' })
  species!: string;
  @Property({ name: 'type' })
  type!: string;
  @Property({ name: 'gender' })
  gender!: string;
  @Property({ name: 'origin', type: JsonType })
  origin!: object;
  @Property({ name: 'location', type: JsonType })
  location!: object;
  @Property({ name: 'image' })
  image!: string;
  @Property({ name: 'episode', type: JsonType })
  episode!: string[];
  @Property({ name: 'url' })
  url!: string;
  @Property({ name: 'created' })
  created!: Date;
  @OneToOne(() => CharactersEntity, { nullable: false })
  characters_table!: CharactersEntity;
}
