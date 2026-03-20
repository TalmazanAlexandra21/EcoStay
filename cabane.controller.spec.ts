import { Test, TestingModule } from '@nestjs/testing';
import { CabaneController } from './cabane.controller';
import { CabaneService } from './cabane.service';

describe('CabaneController', () => {
  let controller: CabaneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CabaneController],
      providers: [CabaneService],
    }).compile();

    controller = module.get<CabaneController>(CabaneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
