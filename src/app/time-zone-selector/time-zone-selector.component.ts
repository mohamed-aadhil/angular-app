import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-time-zone-selector',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './time-zone-selector.component.html',
  styleUrl: './time-zone-selector.component.css'
})
export class TimeZoneSelectorComponent {
  
  @Input() defaultZone: string = 'America/New_York';
  @Output() zoneChange = new EventEmitter<string>();

  timeZones: string[] = [];

  ngOnInit() {
    if ('supportedValuesOf' in Intl && typeof Intl.supportedValuesOf === 'function') {
      this.timeZones = Intl.supportedValuesOf('timeZone');
    } else {
      // Fallback time zones
      this.timeZones = ['UTC', 'Asia/Kolkata', 'Europe/London'];
    }
  }

  onZoneChange(event: Event) {
    const selectedZone = (event.target as HTMLSelectElement).value;
    this.zoneChange.emit(selectedZone);
  }
}
