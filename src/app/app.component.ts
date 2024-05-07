import { Component, OnInit } from '@angular/core';
import { ClockService } from './services/clock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private clockService: ClockService) { }

  ngOnInit(): void {
    // Start the timer when the app component is initialized
    this.clockService.startTimer();
  }
}
