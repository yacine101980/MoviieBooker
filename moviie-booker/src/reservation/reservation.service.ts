import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ReservationDto } from './dto/reservation.dto';

@Injectable()
export class ReservationService {
    constructor(private readonly prisma: PrismaService) {}

    async createReservation(reservationDto: ReservationDto) {
        const latestReservation = await this.prisma.reservation.findFirst({
            orderBy: {
                reservationDate: 'desc',
            },
            });
        
            if (!latestReservation) {
                return this.prisma.reservation.create({data: reservationDto,});
            }
        
            const currentTime = new Date().getTime();
        
            if (currentTime - latestReservation.reservationDate.getTime() >2 * 60 * 60 * 1000) {
                return this.prisma.reservation.create({data: reservationDto,});
            }
        
            throw new BadRequestException('Reservation not possible, choose another time',);
    }

    async getUserReservation(userId: string) {
        const user = await this.prisma.user.findUnique({where: { id: parseInt(userId) },});
      
          if (!user) {
            throw new NotFoundException('User not found');
          }
          return this.prisma.reservation.findMany({where: { userId: parseInt(userId) },});
    }

    async cancelReservation(id: string) {
        const reservation = await this.prisma.reservation.findUnique({
            where: { id: parseInt(id) },
          });
      
          if (!reservation) {
            throw new NotFoundException('Reservation not found');
          }
      
          return this.prisma.reservation.delete({ where: { id: parseInt(id) } });
    }
}
