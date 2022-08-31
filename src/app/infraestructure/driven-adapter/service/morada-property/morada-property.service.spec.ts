
import { TestBed } from '@angular/core/testing';
import { MoradaPropertyApiService } from './morada-property.service';


describe('MoradaPropertyApiService', () => {
  let service: MoradaPropertyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoradaPropertyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});