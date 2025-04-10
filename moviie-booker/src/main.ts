import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API Movie')
    .setDescription('API for Movie Booking')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  //await app.listen(process.env.PORT ?? 3000);
  await app.listen(process.env.PORT ?? 3000, () => {
    console.log('Application listening on http://localhost:3000/api');
  });
}
bootstrap();
