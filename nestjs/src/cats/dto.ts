// DTO stands for Data Transfer Object. 
// It's an object that defines how the data will be sent over the network.
import { IsString, IsInt } from 'class-validator';

export class CreateCatDto {
    @IsString()
    name: string;

    @IsInt()
    age: number;

    breed: string;
}