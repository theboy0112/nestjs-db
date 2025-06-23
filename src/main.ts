import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { enableCompileCache } from 'module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:5174' , 'http://localhost:5177'],
    credentials: true, 
  });

  await app.listen(4003);
}
bootstrap();