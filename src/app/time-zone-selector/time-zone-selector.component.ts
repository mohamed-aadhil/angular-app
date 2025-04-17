import { CommonModule } from '@angular/common';
import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-zone-selector',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './time-zone-selector.component.html',
  styleUrl: './time-zone-selector.component.css'
})
export class TimeZoneSelectorComponent {
  @Output() zoneChange = new EventEmitter<string>();

  timeZones: string[] = [
    'UTC',
    'America/New_York',
    'Europe/London',
    'Asia/Kolkata',
    'Asia/Tokyo'
  ];

  onZoneChange(event: Event) {
    const selectedZone = (event.target as HTMLSelectElement).value;
    this.zoneChange.emit(selectedZone);
  }
}
