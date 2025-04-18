import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeZoneSelectorComponent } from '../time-zone-selector/time-zone-selector.component';

@Component({
  selector: 'app-foreign-time',
  standalone: true,
  imports: [CommonModule, TimeZoneSelectorComponent],
  templateUrl: './foreign-time.component.html',
  styleUrls: ['./foreign-time.component.css']
})
export class ForeignTimeComponent implements OnInit, OnDestroy {
  selectedZone = 'America/New_York'; // default to USA
  foreignTime: string = '';
  private socket?: WebSocket;

  ngOnInit(): void {
    this.connectToSocket(this.selectedZone);
  }

  onZoneChange(newZone: string) {
    this.selectedZone = newZone;
    this.disconnectSocket();
    this.connectToSocket(newZone);
  }

  connectToSocket(zone: string) {
    this.socket = new WebSocket(`ws://localhost:5135/ws/time`);
  
    this.socket.onopen = () => {
      // Send the zone as the first message after connection is open
      this.socket?.send(zone);
    };
  
    this.socket.onmessage = (event) => {
      this.foreignTime = event.data;
    };
  
    this.socket.onerror = (err) => {
      console.error('WebSocket error:', err);
    };
  }
  

  disconnectSocket() {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.close();
    }
  }

  ngOnDestroy(): void {
    this.disconnectSocket();
  }
}
