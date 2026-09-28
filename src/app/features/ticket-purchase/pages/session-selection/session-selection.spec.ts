import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionSelection } from './session-selection';

describe('SessionSelection', () => {
  let component: SessionSelection;
  let fixture: ComponentFixture<SessionSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionSelection],
    }).compileComponents();

    fixture = TestBed.createComponent(SessionSelection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
