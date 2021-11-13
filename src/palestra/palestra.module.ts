import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Palestra } from '../palestra/interface/palestra.interface';
import { PalestraController } from '../palestra/palestra.controller';
import { PalestraSchema } from '../palestra/interface/palestra.schema';
import { PalestraService } from './palestra.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'palestra', schema: PalestraSchema}])],
    controllers: [PalestraController],
    providers: [PalestraService]
})
export class PalestraModule {
    
}
