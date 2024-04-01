import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariansBooksComponent } from './librarians-books.component';

describe('LibrariansBooksComponent', () => {
  let component: LibrariansBooksComponent;
  let fixture: ComponentFixture<LibrariansBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrariansBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrariansBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
