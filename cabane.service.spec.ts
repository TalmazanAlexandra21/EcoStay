import { Test, TestingModule } from '@nestjs/testing';
import { CabaneService } from './cabane.service';

describe('CabaneService', () => {
  let service: CabaneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CabaneService],
    }).compile();

    service = module.get<CabaneService>(CabaneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
