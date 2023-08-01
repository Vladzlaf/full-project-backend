import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepo } from './repo/users.repo';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        baseURL: process.env.RICKANDMORTY_API,
      }),
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepo],
})
export class UsersModule {}
