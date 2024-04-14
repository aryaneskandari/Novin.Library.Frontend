import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeSnackbarComponent } from './custome-snackbar.component';

describe('CustomeSnackbarComponent', () => {
  let component: CustomeSnackbarComponent;
  let fixture: ComponentFixture<CustomeSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomeSnackbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomeSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
