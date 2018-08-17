import { AutheticationModule } from './authetication.module';

describe('AutheticationModule', () => {
  let autheticationModule: AutheticationModule;

  beforeEach(() => {
    autheticationModule = new AutheticationModule();
  });

  it('should create an instance', () => {
    expect(autheticationModule).toBeTruthy();
  });
});
