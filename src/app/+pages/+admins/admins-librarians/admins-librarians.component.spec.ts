import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsLibrariansComponent } from './admins-librarians.component';

describe('AdminsLibrariansComponent', () => {
  let component: AdminsLibrariansComponent;
  let fixture: ComponentFixture<AdminsLibrariansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminsLibrariansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminsLibrariansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
