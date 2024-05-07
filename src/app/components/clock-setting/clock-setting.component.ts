import { Component, Input } from '@angular/core';
import { ClockService } from '../../services/clock.service';
import { SettingType } from '../../constants/setting-type..enum';

@Component({
  selector: 'app-clock-setting',
  templateUrl: './clock-setting.component.html',
  styleUrl: './clock-setting.component.css'
})
export class ClockSettingComponent {
  @Input() settingType!: SettingType;

  constructor(private clockService: ClockService) { }

  increase() {
    // Increase the time based on the setting type
    this.clockService.increaseTime(this.settingType);
  }

  decrease() {
    // Decrease the time based on the setting type
    this.clockService.decreaseTime(this.settingType);
  }
}
