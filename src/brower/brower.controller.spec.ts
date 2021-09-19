import { Test, TestingModule } from '@nestjs/testing';
import { BrowerController } from './brower.controller';

describe('BrowerController', () => {
  let controller: BrowerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrowerController],
    }).compile();

    controller = module.get<BrowerController>(BrowerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
