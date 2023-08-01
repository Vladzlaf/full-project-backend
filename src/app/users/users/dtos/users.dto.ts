import { UsersEntity } from '../entities/users.entity';

export interface Location {
  name: string;
  url: string;
}
export class UsersDto {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: Location;

  static fromEntity(entity?: UsersEntity) {
    if (!entity) {
      return;
    }
    const usersDTO = new UsersDto();
    usersDTO.id = entity.id;
    usersDTO.gender = entity.gender;
    usersDTO.location = entity.location;
    usersDTO.name = entity.name;
    usersDTO.status = entity.status;
    usersDTO.species = entity.species;
    usersDTO.type = entity.type;
    return usersDTO;
  }

  static fromEntities(entities?: UsersEntity[]) {
    if (!entities?.map) {
      return;
    }
    return entities.map((entity) => this.fromEntity(entity));
  }
}
