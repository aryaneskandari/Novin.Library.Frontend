import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariansHomeComponent } from './librarians-home.component';

describe('LibrariansHomeComponent', () => {
  let component: LibrariansHomeComponent;
  let fixture: ComponentFixture<LibrariansHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrariansHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrariansHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
