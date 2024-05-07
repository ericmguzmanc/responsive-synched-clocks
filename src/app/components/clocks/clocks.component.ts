import { Component } from '@angular/core';
import { SettingType } from '../../constants/setting-type..enum';
import { ClockService } from '../../services/clock.service';

@Component({
  selector: 'app-clocks',
  templateUrl: './clocks.component.html',
  styleUrl: './clocks.component.css'
})
export class ClocksComponent {
  settingType = SettingType;

  constructor(private clockService: ClockService) { }

  resetClocks()  {
    // Reset all the clocks
    this.clockService.resetClocks();
  }
}
