import { Test, TestingModule } from '@nestjs/testing';
import { AlquilerService } from './alquiler.service';

describe('AlquilerService', () => {
  let service: AlquilerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlquilerService],
    }).compile();

    service = module.get<AlquilerService>(AlquilerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
