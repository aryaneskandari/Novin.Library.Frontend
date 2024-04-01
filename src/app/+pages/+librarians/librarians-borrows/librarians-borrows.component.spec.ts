import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariansBorrowsComponent } from './librarians-borrows.component';

describe('LibrariansBorrowsComponent', () => {
  let component: LibrariansBorrowsComponent;
  let fixture: ComponentFixture<LibrariansBorrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrariansBorrowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrariansBorrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
