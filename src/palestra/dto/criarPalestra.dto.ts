import { IsString, IsNotEmpty, IsDateString } from "class-validator";


export class CriarPalestraDto{
    @IsString()
    @IsNotEmpty()
    tema: string

    @IsString()
    @IsNotEmpty()
    palestrante: string;

    @IsString()
    @IsNotEmpty()
    descricao: string;

    @IsDateString()
    @IsNotEmpty()
    data: Date;
}