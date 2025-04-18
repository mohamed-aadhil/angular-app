import { Component } from '@angular/core';
import { LocalTimeComponent } from './local-time/local-time.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { ForeignTimeComponent } from './foreign-time/foreign-time.component';

@Component({
  selector: 'app-root',
  imports:[CommonModule,LocalTimeComponent,HeaderComponent,ForeignTimeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  selectedTimeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  title: any;

  onTimeZoneChange(zone: string) {
    this.selectedTimeZone = zone;
  }
}
