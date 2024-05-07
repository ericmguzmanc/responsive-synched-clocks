import { Component, OnInit } from '@angular/core';
import { ClockService } from '../../services/clock.service';
import { Subject, takeUntil } from 'rxjs';
import { BaseClockComponent } from '../base-clock';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrl: './analog-clock.component.css'
})
export class AnalogClockComponent extends BaseClockComponent {

  constructor(clockService: ClockService) {
    super(clockService);
  }

  // Override the updateTime method to update the clock hands
  override updateTime(d: Date): void {
    super.updateTime(d);
    this.second = this.d.getSeconds() * 6; // 6 degrees per second
    this.minute = this.d.getMinutes() * 6; // 6 degrees per minute
    this.hour = (this.d.getHours() * 30) + (this.d.getMinutes() / 2); // 30 degrees per hour, 0.5 degrees per minute
  }
}
