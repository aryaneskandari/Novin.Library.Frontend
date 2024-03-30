import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBooksComponent } from './public-books.component';

describe('PublicBooksComponent', () => {
  let component: PublicBooksComponent;
  let fixture: ComponentFixture<PublicBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
