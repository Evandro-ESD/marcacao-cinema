import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  SeatComponent,
  Seat
} from '../../components/seat/seat';
import { SeatLegend } from '../../components/seat-legend/seat-legend';

@Component({
  selector: 'app-seat-selection',
  standalone: true,
  imports: [
    SeatComponent,
    SeatLegend
  ],
  templateUrl: './seat-selection.html',
  styleUrl: './seat-selection.css'
})
export class SeatSelection {

  sessionId: number;

  seats: Seat[] = [
    { id: 1, row: 'A', number: 1, status: 'available' },
    { id: 2, row: 'A', number: 2, status: 'available' },
    { id: 3, row: 'A', number: 3, status: 'sold' },
    { id: 4, row: 'A', number: 4, status: 'available' },

    { id: 5, row: 'B', number: 1, status: 'available' },
    { id: 6, row: 'B', number: 2, status: 'reserved' },
    { id: 7, row: 'B', number: 3, status: 'available' },
    { id: 8, row: 'B', number: 4, status: 'available' },

    { id: 9, row: 'C', number: 1, status: 'available' },
    { id: 10, row: 'C', number: 2, status: 'available' },
    { id: 11, row: 'C', number: 3, status: 'available' },
    { id: 12, row: 'C', number: 4, status: 'blocked' }
  ];

  selectedSeats = signal<Seat[]>([]);

  selectedCount = computed(
    () => this.selectedSeats().length
  );

  constructor(private route: ActivatedRoute) {

    this.sessionId = Number(
      this.route.snapshot.paramMap.get('sessionId')
    );

  }

  toggleSeat(seat: Seat): void {

    this.selectedSeats.update(selected => {

      const exists = selected.some(
        item => item.id === seat.id
      );

      if (exists) {

        return selected.filter(
          item => item.id !== seat.id
        );

      }

      return [
        ...selected,
        seat
      ];

    });

  }

  isSelected(seat: Seat): boolean {

    return this.selectedSeats().some(
      item => item.id === seat.id
    );

  }

  comprar(): void {

    console.log({
      sessionId: this.sessionId,
      seats: this.selectedSeats()
    });

  }
}