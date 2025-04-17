import { Component } from '@angular/core';
import { TimeZoneSelectorComponent } from './time-zone-selector/time-zone-selector.component';
import { LocalTimeComponent } from './local-time/local-time.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports:[CommonModule,LocalTimeComponent,HeaderComponent,TimeZoneSelectorComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  selectedTimeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;

  onTimeZoneChange(zone: string) {
    this.selectedTimeZone = zone;
  }
}
