import { CrudUserdata } from '../../entity/crud.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CrudService {
  constructor(
    @InjectRepository(CrudUserdata) private crudRepo: Repository<CrudUserdata>,
  ) {}
  findAll(): Promise<CrudUserdata[]> {
    return this.crudRepo.find();
  }
  create(newUser) {
    this.crudRepo.insert(newUser);
    return 'User Added Successfully';
  }
  find(id: string): Promise<CrudUserdata[]> {
    return this.crudRepo.find({ where: { id: String(id) } });
  }
  delete(id: string) {
    this.crudRepo.delete(id);
    return `user id:${id} deleted successfully`;
  }
  update(id: string, userUpdate) {
    this.crudRepo.update(id, userUpdate);
    return `user id:${id} updated successfully`;
  }
}
