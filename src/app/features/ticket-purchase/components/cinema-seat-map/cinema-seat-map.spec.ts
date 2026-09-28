import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CinemaSeatMap } from './cinema-seat-map';

describe('CinemaSeatMap', () => {
  let component: CinemaSeatMap;
  let fixture: ComponentFixture<CinemaSeatMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinemaSeatMap],
    }).compileComponents();

    fixture = TestBed.createComponent(CinemaSeatMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
