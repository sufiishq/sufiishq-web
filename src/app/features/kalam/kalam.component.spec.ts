import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalamComponent } from './kalam.component';

describe('KalamComponent', () => {
  let component: KalamComponent;
  let fixture: ComponentFixture<KalamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KalamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
