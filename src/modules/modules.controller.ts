import { Controller, Get } from '@nestjs/common';
import { ModulesService } from './modules.service';

@Controller()
export class ModulesController {
  constructor(private readonly homepage: ModulesService) {}
  @Get()
  home() {
    return this.homepage.homePage();
  }
}
