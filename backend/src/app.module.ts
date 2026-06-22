import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { QuadrasModule } from './quadras/quadras.module';
import { ReservasModule } from './reservas/reservas.module';
import { TimesModule } from './times/times.module';

@Module({
  imports: [UsersModule, QuadrasModule, ReservasModule, TimesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
