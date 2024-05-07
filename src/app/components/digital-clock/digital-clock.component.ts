import { Component } from '@angular/core';
import { ClockService } from '../../services/clock.service';
import { BaseClockComponent } from '../base-clock';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrl: './digital-clock.component.css'
})
export class DigitalClockComponent extends BaseClockComponent {

  constructor(clockService: ClockService) {
    super(clockService);
  }

  // Override the updateTime method to update the clock hands
  override updateTime(d: Date): void {
    super.updateTime(d);
    this.second = this.d.getSeconds();
    this.minute = this.d.getMinutes()
    this.hour = this.d.getHours();

    if (this.hour < 10) {
      this.hour = '0' + this.hour;
    }
    if (this.minute < 10) {
      this.minute = '0' + this.minute;
    }
    if (this.second < 10) {
      this.second = '0' + this.second;
    }
  }
}
