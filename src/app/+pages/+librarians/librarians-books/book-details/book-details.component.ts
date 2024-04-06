import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CustomValidators } from '../../../../+shared/+validators/noSpaceAllowed.validators';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
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

  ]
})
export class BookDetailsComponent {
  private fb = inject(FormBuilder);
  bookForm = this.fb.group({
    id: [null,[Validators.pattern("^[0-9]*$"),CustomValidators.noSpaceAllowed]],
    title: [null, Validators.required],
    writer: [null, Validators.required],
    publisher: [null, Validators.required],
    price: [null, [Validators.pattern("^[0-9.]*$")]],

  });


}
