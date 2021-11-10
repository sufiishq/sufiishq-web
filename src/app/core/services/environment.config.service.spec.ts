import {EnvironmentConfigService} from "./environment.config.service";
import {TestBed} from "@angular/core/testing";


describe('EnvironmentConfigService', () => {
  let service: EnvironmentConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmentConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
