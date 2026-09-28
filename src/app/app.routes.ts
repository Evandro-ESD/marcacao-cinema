import { Routes } from '@angular/router';



export const routes: Routes = [
  { path: '', loadComponent: ()=> import('./features/home/pages/home-page/home-page')
    .then( m => m.HomePage)
  },
  {
    path: 'comprar/:sessionId', loadComponent: ()=> import('./features/ticket-purchase/pages/seat-selection/seat-selection')
    .then( m => m.SeatSelection)
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
  {
  path: 'comprar',
  loadComponent: () =>
    import('./features/ticket-purchase/pages/session-selection/session-selection')
      .then(m => m.SessionSelection)
},
{
  path: 'comprar/:sessionId',
  loadComponent: () =>
    import('./features/ticket-purchase/pages/seat-selection/seat-selection')
      .then(m => m.SeatSelection)
},
{
  path: 'comprar/:sessionId',
  loadComponent: () =>
    import('./features/ticket-purchase/pages/seat-selection/seat-selection')
      .then(m => m.SeatSelection)
}
  
];
