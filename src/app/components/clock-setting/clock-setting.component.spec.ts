import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockSettingComponent } from './clock-setting.component';

describe('ClockSettingComponent', () => {
  let component: ClockSettingComponent;
  let fixture: ComponentFixture<ClockSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockSettingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClockSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
