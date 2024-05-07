import { OnInit, OnDestroy, Component } from '@angular/core';
import { ClockService } from '../services/clock.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-base-clock',
  template: ''
})
export class BaseClockComponent implements OnInit, OnDestroy {
  protected destroy$ = new Subject<void>();
  protected second: any = 0;
  protected hour: any = 0;
  protected minute: any = 0;
  protected d: any;

  constructor(protected clockService: ClockService) { }

  ngOnInit() {
    // Subscribe to the timer observable
    this.clockService.timer$
    .pipe(takeUntil(this.destroy$))
    .subscribe((d) => {
      this.updateTime(d as Date);
    });
  }

  // Update the time
  protected updateTime(d: Date): void {
    this.d = d;
    this.second = this.d.getSeconds();
    this.minute = this.d.getMinutes();
    this.hour = this.d.getHours()
  }

  // Unsubscribe from the timer observable
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
