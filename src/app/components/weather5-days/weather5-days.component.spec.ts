import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather5DaysComponent } from './weather5-days.component';

describe('Weather5DaysComponent', () => {
  let component: Weather5DaysComponent;
  let fixture: ComponentFixture<Weather5DaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Weather5DaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Weather5DaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
