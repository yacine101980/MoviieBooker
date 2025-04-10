import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from '../prisma/prisma.service';
import { UserModule } from './user/user.module';
import { MoviesModule } from './movies/movies.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { JwtService } from '@nestjs/jwt';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [UserModule, MoviesModule, HttpModule, 
    ConfigModule.forRoot({
      isGlobal: true,
    }), ReservationModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, JwtService],
})
export class AppModule {}
