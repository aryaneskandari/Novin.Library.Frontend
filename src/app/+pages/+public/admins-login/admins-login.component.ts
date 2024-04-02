import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CustomValidators } from '../../../+shared/+validators/noSpaceAllowed.validators';


@Component({
  selector: 'app-admins-login',
  templateUrl: './admins-login.component.html',
  styleUrl: './admins-login.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,

  ]
})
export class AdminsLoginComponent {

  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    id: null,
    username: [null, [Validators.required,Validators.email,CustomValidators.noSpaceAllowed]],
    password: [null, [Validators.required,CustomValidators.noSpaceAllowed]],
  });

}

