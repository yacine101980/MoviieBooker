import {  IsOptional,  IsNumber,  IsDate, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReservationDto {
@ApiProperty({
    description: 'Movie Name',
    example: 'The wolf of wall street',
})
@IsNotEmpty()
@IsString()
movieName: string;

@ApiProperty({
    description: 'User ID',
    example: 1,
})
@IsNotEmpty()
@IsNumber()
userId: number;

@ApiProperty({
    description: 'Reservation Date',
    example: '2025-04-10T20:00:00Z',
})
@IsOptional()
@IsDate()
reservationDate: Date;
}
