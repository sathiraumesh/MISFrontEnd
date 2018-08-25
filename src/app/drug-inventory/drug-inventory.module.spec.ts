import { DrugInventoryModule } from './drug-inventory.module';

describe('DrugInventoryModule', () => {
  let drugInventoryModule: DrugInventoryModule;

  beforeEach(() => {
    drugInventoryModule = new DrugInventoryModule();
  });

  it('should create an instance', () => {
    expect(drugInventoryModule).toBeTruthy();
  });
});
