import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowsComponent } from './borrows.component';

describe('BorrowsComponent', () => {
  let component: BorrowsComponent;
  let fixture: ComponentFixture<BorrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
