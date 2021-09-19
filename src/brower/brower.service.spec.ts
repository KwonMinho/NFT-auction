import { Test, TestingModule } from '@nestjs/testing';
import { BrowerService } from './brower.service';

describe('BrowerService', () => {
  let service: BrowerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrowerService],
    }).compile();

    service = module.get<BrowerService>(BrowerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
