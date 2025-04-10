import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationDto } from './dto/reservation.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Reservation')
@Controller('reservation')
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) {}

    @Post()
    @ApiOperation({ summary: 'Create a reservation' })
    @ApiResponse({ status: 201, description: 'Reservation created successfully' })
    createReservation(@Body() reservationDto: ReservationDto) {
        return this.reservationService.createReservation(reservationDto);
    }

    @Get('/:userId')
    @ApiOperation({ summary: 'Get user reservations' })
    @ApiResponse({ status: 200, description: 'Reservations found' })
    getUserReservation(@Param('userId') userId: string) {
        return this.reservationService.getUserReservation(userId);
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'Cancel a reservation' })
    @ApiResponse({ status: 200, description: 'Reservation cancelled successfully' })
    cancelReservation(@Param('id') id: string) {
        return this.reservationService.cancelReservation(id);
    }
}
