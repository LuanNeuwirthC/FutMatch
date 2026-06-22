import { Module } from '@nestjs/common';
import { QuadrasService } from './quadras.service';
import { QuadrasController } from './quadras.controller';

@Module({
  controllers: [QuadrasController],
  providers: [QuadrasService],
})
export class QuadrasModule {}
