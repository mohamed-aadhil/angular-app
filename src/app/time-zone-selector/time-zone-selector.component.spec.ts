import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeZoneSelectorComponent } from './time-zone-selector.component';

describe('TimeZoneSelectorComponent', () => {
  let component: TimeZoneSelectorComponent;
  let fixture: ComponentFixture<TimeZoneSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeZoneSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeZoneSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
