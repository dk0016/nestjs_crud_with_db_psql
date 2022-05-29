import { CrudUserdata } from '../../entity/crud.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudController } from './crud.controller';
import { CrudService } from './crud.service';

@Module({
  controllers: [CrudController],
  providers: [CrudService],
  imports: [TypeOrmModule.forFeature([CrudUserdata])],
})
export class CrudModule {}
