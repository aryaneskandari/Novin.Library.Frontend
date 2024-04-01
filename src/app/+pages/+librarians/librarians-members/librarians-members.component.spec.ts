import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariansMembersComponent } from './librarians-members.component';

describe('LibrariansMembersComponent', () => {
  let component: LibrariansMembersComponent;
  let fixture: ComponentFixture<LibrariansMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrariansMembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrariansMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
