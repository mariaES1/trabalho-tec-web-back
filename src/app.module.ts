import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { AppService } from './app.service';
import { PalestraModule } from './palestra/palestra.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Admin:IzVldG6ViRkz37GZ@cluster0.p3cne.mongodb.net/smartRankings?retryWrites=true&w=majority'),
    PalestraModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
