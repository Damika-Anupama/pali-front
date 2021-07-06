import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBubbleComponent } from './create-bubble.component';

describe('CreateBubbleComponent', () => {
  let component: CreateBubbleComponent;
  let fixture: ComponentFixture<CreateBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
