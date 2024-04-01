import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeSidenavComponent } from './custome-sidenav.component';

describe('CustomeSidenavComponent', () => {
  let component: CustomeSidenavComponent;
  let fixture: ComponentFixture<CustomeSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomeSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomeSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
