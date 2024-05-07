import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClocksComponent } from './components/clocks/clocks.component';
import { AnalogClockComponent } from './components/analog-clock/analog-clock.component';
import { ClockService } from './services/clock.service';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';
import { ClockSettingComponent } from './components/clock-setting/clock-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    ClocksComponent,
    AnalogClockComponent,
    DigitalClockComponent,
    ClockSettingComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ClockService],
  bootstrap: [AppComponent],
})
export class AppModule {}
