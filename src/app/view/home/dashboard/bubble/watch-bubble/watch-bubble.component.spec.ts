import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchBubbleComponent } from './watch-bubble.component';

describe('WatchBubbleComponent', () => {
  let component: WatchBubbleComponent;
  let fixture: ComponentFixture<WatchBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
