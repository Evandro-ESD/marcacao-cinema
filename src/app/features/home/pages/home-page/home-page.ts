import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


interface EventSession {
  id: number;
  eventName: string;
  date: string;
  time: string;
  venue: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

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