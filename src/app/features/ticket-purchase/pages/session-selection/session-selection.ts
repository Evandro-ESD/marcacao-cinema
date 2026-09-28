import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Session {
  id: number;
  eventName: string;
  date: string;
  time: string;
  venue: string;
}

@Component({
  selector: 'app-session-selection',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './session-selection.html',
  styleUrl: './session-selection.css'
})
export class SessionSelection {

  sessions: Session[] = [
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