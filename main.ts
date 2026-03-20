import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // ACEASTA ESTE LINIA ESENȚIALĂ PENTRU CONEXIUNE
  app.enableCors(); 
  
  await app.listen(3000);
  console.log('Backend pornit pe http://localhost:3000');
}
bootstrap();