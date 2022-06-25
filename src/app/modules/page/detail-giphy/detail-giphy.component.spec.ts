import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGiphyComponent } from './detail-giphy.component';

describe('DetailGiphyComponent', () => {
  let component: DetailGiphyComponent;
  let fixture: ComponentFixture<DetailGiphyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailGiphyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailGiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
