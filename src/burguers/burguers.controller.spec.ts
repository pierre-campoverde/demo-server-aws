import { Test, TestingModule } from '@nestjs/testing';
import { BurguersController } from './burguers.controller';

describe('BurguersController', () => {
  let controller: BurguersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BurguersController],
    }).compile();

    controller = module.get<BurguersController>(BurguersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
