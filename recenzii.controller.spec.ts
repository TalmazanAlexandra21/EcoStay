import { Test, TestingModule } from '@nestjs/testing';
import { RecenziiController } from './recenzii.controller';

describe('RecenziiController', () => {
  let controller: RecenziiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecenziiController],
    }).compile();

    controller = module.get<RecenziiController>(RecenziiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
