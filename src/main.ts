import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let port=process.env.PORT || 4400;
  await app.listen(port,()=>{
    console.log(`rendez vous sur: http://localhost:${port}/`)
  });
}
bootstrap();
 