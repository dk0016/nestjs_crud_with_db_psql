import { NestFactory } from '@nestjs/core';
import { ModulesModule } from './modules/modules.module';

async function bootstrap() {
  const app = await NestFactory.create(ModulesModule);
  await app.listen(3000);
}
bootstrap();
