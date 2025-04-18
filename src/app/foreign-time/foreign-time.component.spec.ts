import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignTimeComponent } from './foreign-time.component';

describe('ForeignTimeComponent', () => {
  let component: ForeignTimeComponent;
  let fixture: ComponentFixture<ForeignTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForeignTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeignTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
