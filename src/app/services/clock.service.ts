import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SettingType } from '../constants/setting-type..enum';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  timerSubject = new Subject();
  currentTime = new Date();
  interval: any;

  // Observable to subscribe to the timer
  get timer$() {
    return this.timerSubject.asObservable();
  }

  constructor() { }

  startTimer(startTime = new Date()) {
    this.currentTime = startTime;
    // Start the interval to update the time every second
    this.interval = setInterval(() => {
      this.currentTime = new Date(this.currentTime.getTime() + 1000); // Moving time forward by 1 second
      this.timerSubject.next(this.currentTime);
    }, 1000);
  }

  stopTimer() {
    if (this.interval) {
      // Clear the interval if it exists
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  increaseTime(settingType: SettingType) {
    // Stop the timer to avoid multiple intervals running at the same time
    this.stopTimer();
    // Create a new date object to avoid modifying the current time
    let newTime = new Date(this.currentTime.getTime());

    switch(settingType) {
      case SettingType.HOURS:
        newTime.setHours(newTime.getHours() + 1);
        break;
      case SettingType.MINUTES:
        newTime.setMinutes(newTime.getMinutes() + 1);
        break;
      case SettingType.SECONDS:
        this.timerSubject.next(new Date());
        newTime.setSeconds(newTime.getSeconds() + 1);
        break;
    }
    // Emit the new time to the timer observable
    this.timerSubject.next(newTime);
    // Restart the timer with the updated time
    this.startTimer(newTime);
  }

  decreaseTime(settingType: SettingType) {
    // Stop the timer to avoid multiple intervals running at the same time
    this.stopTimer();
    // Create a new date object to avoid modifying the current time
    let newTime = new Date(this.currentTime.getTime());

    switch(settingType) {
      case SettingType.HOURS:
        newTime.setHours(newTime.getHours() - 1);
        break;
      case SettingType.MINUTES:
        newTime.setMinutes(newTime.getMinutes() - 1);
        break;
      case SettingType.SECONDS:
        this.timerSubject.next(new Date());
        newTime.setSeconds(newTime.getSeconds() - 1);
        break;
    }
    // Emit the new time to the timer observable
    this.timerSubject.next(newTime);
    // Restart the timer with the updated time
    this.startTimer(newTime);
  }

  resetClocks() {
    this.stopTimer();
    this.currentTime = new Date();
    this.startTimer();
  }

}
