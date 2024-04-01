import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariansNavComponent } from './librarians-nav.component';

describe('LibrariansNavComponent', () => {
  let component: LibrariansNavComponent;
  let fixture: ComponentFixture<LibrariansNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrariansNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrariansNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
