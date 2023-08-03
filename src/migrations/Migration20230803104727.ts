import { Migration } from '@mikro-orm/migrations';

export class Migration20230803104727 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "characters-profile-table" drop constraint "characters-profile-table_character_id_foreign";');

    this.addSql('create table "characters_table" ("id" serial primary key, "name" varchar(255) not null);');

    this.addSql('create table "characters_profile_table" ("id" serial primary key, "name" varchar(255) not null, "status" varchar(255) not null, "species" varchar(255) not null, "type" varchar(255) not null, "gender" varchar(255) not null, "origin" jsonb not null, "location" jsonb not null, "image" varchar(255) not null, "episode" jsonb not null, "url" varchar(255) not null, "created" timestamptz(0) not null, "characters_table_id" int not null);');
    this.addSql('alter table "characters_profile_table" add constraint "characters_profile_table_characters_table_id_unique" unique ("characters_table_id");');

    this.addSql('alter table "characters_profile_table" add constraint "characters_profile_table_characters_table_id_foreign" foreign key ("characters_table_id") references "characters_table" ("id") on update cascade;');

    this.addSql('drop table if exists "characters" cascade;');

    this.addSql('drop table if exists "characters-profile-table" cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "characters_profile_table" drop constraint "characters_profile_table_characters_table_id_foreign";');

    this.addSql('create table "characters" ("id" serial primary key, "name" varchar not null default null);');

    this.addSql('create table "characters-profile-table" ("id" serial primary key, "name" varchar not null default null, "status" varchar not null default null, "species" varchar not null default null, "type" varchar not null default null, "gender" varchar not null default null, "origin" jsonb not null default null, "location" jsonb not null default null, "image" varchar not null default null, "episode" jsonb not null default null, "url" varchar not null default null, "created" timestamptz not null default null, "character_id" int4 not null default null);');
    this.addSql('alter table "characters-profile-table" add constraint "characters-profile-table_character_id_unique" unique ("character_id");');

    this.addSql('alter table "characters-profile-table" add constraint "characters-profile-table_character_id_foreign" foreign key ("character_id") references "characters" ("id") on update cascade on delete no action;');

    this.addSql('drop table if exists "characters_table" cascade;');

    this.addSql('drop table if exists "characters_profile_table" cascade;');
  }

}
