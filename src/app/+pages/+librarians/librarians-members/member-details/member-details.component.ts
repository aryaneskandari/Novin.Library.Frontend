import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { CustomValidators } from '../../../../+shared/+validators/noSpaceAllowed.validators';

@Component({
  selector: 'app-member-details',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,

  ],
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.scss'
})
export class MemberDetailsComponent {
  private fb = inject(FormBuilder);
  memberForm = this.fb.group({
    id: [null,[Validators.pattern("^[0-9]*$"),CustomValidators.noSpaceAllowed]],
    fullname: [null, [Validators.required]],
    phoneNumber: [null, [Validators.required,Validators.min,Validators.pattern("(09)[0-9 ]{9}"),CustomValidators.noSpaceAllowed]],
    major: [null,],
    gender: [null, [Validators.required]],
    address: null,
    // email: [null,Validators.email],
  });
}
