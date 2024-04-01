import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsNavComponent } from './admins-nav.component';

describe('AdminsNavComponent', () => {
  let component: AdminsNavComponent;
  let fixture: ComponentFixture<AdminsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminsNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
