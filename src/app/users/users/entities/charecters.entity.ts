import { Entity, Property, OneToOne, PrimaryKey } from '@mikro-orm/core';
import { CharactersProfEntity } from './charecters-profile.entity';

@Entity({ tableName: 'characters_table' })
export class CharactersEntity {
  @PrimaryKey({ nullable: false })
  id!: number;

  @Property({ name: 'name' })
  name!: string;

  @OneToOne(() => CharactersProfEntity, 'characters_table', {
    mappedBy: 'characters_table',
    nullable: false,
  })
  charactersProfile!: CharactersProfEntity;
}
