import { Test, TestingModule } from '@nestjs/testing';
import { RecenziiService } from './recenzii.service';

describe('RecenziiService', () => {
  let service: RecenziiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecenziiService],
    }).compile();

    service = module.get<RecenziiService>(RecenziiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
