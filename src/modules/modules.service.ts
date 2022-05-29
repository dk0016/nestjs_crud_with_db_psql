import { Injectable } from '@nestjs/common';

@Injectable()
export class ModulesService {
  homePage(): string {
    return 'Welcome to the CRUD Application';
  }
}
