import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CrudUserdata } from 'src/entity/crud.entity';
import { CrudService } from './crud.service';

@Controller('crud')
export class CrudController {
  constructor(private readonly crudservice: CrudService) {}
  @Get()
  getAll(): Promise<CrudUserdata[]> {
    return this.crudservice.findAll();
  }

  @Post('')
  @HttpCode(201)
  createUser(@Body() newuser: any) {
    return this.crudservice.create(newuser);
  }

  @Get('/:id')
  getUser(@Param('id') id): Promise<CrudUserdata[]> {
    return this.crudservice.find(id);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id) {
    return this.crudservice.delete(id);
  }

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() userUpdate: any) {
    return this.crudservice.update(id, userUpdate);
  }
}
