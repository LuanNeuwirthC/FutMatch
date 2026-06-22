import { Test, TestingModule } from '@nestjs/testing';
import { QuadrasController } from './quadras.controller';
import { QuadrasService } from './quadras.service';

describe('QuadrasController', () => {
  let controller: QuadrasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuadrasController],
      providers: [QuadrasService],
    }).compile();

    controller = module.get<QuadrasController>(QuadrasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
