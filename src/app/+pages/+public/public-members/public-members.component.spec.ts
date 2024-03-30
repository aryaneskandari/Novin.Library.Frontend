import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMembersComponent } from './public-members.component';

describe('PublicMembersComponent', () => {
  let component: PublicMembersComponent;
  let fixture: ComponentFixture<PublicMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicMembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
