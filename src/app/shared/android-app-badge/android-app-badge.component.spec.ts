import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidAppBadgeComponent } from './android-app-badge.component';

describe('AndroidAppBadgeComponent', () => {
  let component: AndroidAppBadgeComponent;
  let fixture: ComponentFixture<AndroidAppBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidAppBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidAppBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
