import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agency } from './agency/agency.entity';
import { User } from './user/user.entity';
import { AgencyController } from './agency/agency.controller';
import { AgencyRepository } from './agency/agency.repo';
import { UserRepository } from './user/user.repo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'sqlite',
      database: './db/database.db',
      synchronize: false,
      entities: [
        Agency,
        User,
      ],
    }),
    TypeOrmModule.forFeature([AgencyRepository, UserRepository]),
  ],
  controllers: [AppController, AgencyController],
  providers: [AppService],
})
export class AppModule {}
