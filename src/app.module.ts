import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
 /*imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    username: 'admin',
    password: 'admin',
    database: 'my_db',
    synchronize: false,
  }),],*/
  controllers: [AppController],
})
export class AppModule { }
