import { Test, TestingModule } from '@nestjs/testing';
import { QuadrasService } from './quadras.service';

describe('QuadrasService', () => {
  let service: QuadrasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuadrasService],
    }).compile();

    service = module.get<QuadrasService>(QuadrasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
