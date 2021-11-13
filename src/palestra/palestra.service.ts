import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Palestra } from '../palestra/interface/palestra.interface';
import { CriarPalestraDto } from './dto/criarPalestra.dto';

@Injectable()
export class PalestraService {
    constructor(@InjectModel('palestra') private readonly model: Model<Palestra>){}

    async criarPalestra(criarPalestraDto: CriarPalestraDto){
        const palestra = criarPalestraDto;

        const palestraEncontrada = await this.model.findOne(palestra).exec();

        if(palestraEncontrada){
            throw new BadRequestException(`A palestra ${palestra} já existe :(`);
        }

        const palestraCriada = new this.model(criarPalestraDto);
        return await palestraCriada.save();
    }
}
