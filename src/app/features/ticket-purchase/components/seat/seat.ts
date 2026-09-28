import { Component, input, output } from '@angular/core';

export type SeatStatus =
  | 'available'
  | 'reserved'
  | 'sold'
  | 'blocked';

export interface Seat {
  id: number;
  row: string;
  number: number;
  status: SeatStatus;
}

@Component({
  selector: 'app-seat',
  standalone: true,
  templateUrl: './seat.html',
  styleUrl: './seat.css'
})
export class SeatComponent {

  seat = input.required<Seat>();

  selected = input(false);

  seatClicked = output<Seat>();

  onClick(): void {
    if (this.seat().status !== 'available') {
      return;
    }

    this.seatClicked.emit(this.seat());
  }
}