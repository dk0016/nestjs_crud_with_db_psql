import { CrudUserdata } from '../entity/crud.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModulesController } from './modules.controller';
import { ModulesService } from './modules.service';
import { CrudModule } from './crud/crud.module';

@Module({
  controllers: [ModulesController],
  providers: [ModulesService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'test',
      entities: [CrudUserdata],
      synchronize: true,
    }),
    CrudModule,
  ],
})
export class ModulesModule {}
