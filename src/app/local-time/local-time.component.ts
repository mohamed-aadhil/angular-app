import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-local-time',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './local-time.component.html',
  styleUrls: ['./local-time.component.css']
})
export class LocalTimeComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  private intervalId: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.updateTime();

    // Run outside Angular zone to reduce change detection cycles
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        const newTime = new Date().toLocaleTimeString();

        // Only run inside Angular zone when updating UI
        this.ngZone.run(() => {
          this.currentTime = newTime;
        });
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  updateTime() {
    this.currentTime = new Date().toLocaleTimeString();
  }
}
