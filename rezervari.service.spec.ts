import { Test, TestingModule } from '@nestjs/testing';
import { RezervariService } from './rezervari.service';

describe('RezervariService', () => {
  let service: RezervariService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RezervariService],
    }).compile();

    service = module.get<RezervariService>(RezervariService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
