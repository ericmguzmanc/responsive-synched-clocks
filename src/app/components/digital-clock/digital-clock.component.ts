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
}
