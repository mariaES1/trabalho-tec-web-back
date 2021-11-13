import { Body, Controller, Post } from '@nestjs/common';
import { CriarPalestraDto } from '../palestra/dto/criarPalestra.dto';
import { PalestraService } from './palestra.service';

@Controller('api/v1/palestra')
export class PalestraController {
    constructor(private readonly palestraService: PalestraService){}

    @Post()
    async criarPalestra(@Body() criarPalestraDto: CriarPalestraDto){
        return this.palestraService.criarPalestra(criarPalestraDto);
    }
}
