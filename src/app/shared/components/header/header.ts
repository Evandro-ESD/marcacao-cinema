import { Component, linkedSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

interface EventSession {
  id: number;
  eventName: string;
  date: string;
  time: string;
  venue: string;
}


@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

  sessions: EventSession[] = [
    {
      id: 1,
      eventName: 'Evento CEJFM',
      date: '26/10/2026',
      time: '19:00',
      venue: 'Auditório CEJFM'
    },
    {
      id: 2,
      eventName: 'Evento CEJFM',
      date: '27/10/2026',
      time: '14:00',
      venue: 'Auditório CEJFM'
    }
  ];
}
