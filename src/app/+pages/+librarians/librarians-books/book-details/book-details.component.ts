import { Component, EventEmitter, Output, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CustomValidators } from '../../../../+shared/+validators/noSpaceAllowed.validators';
import { Book } from '../../../../+models/Book';
import {MatSnackBar, MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel, MatSnackBarModule, MatSnackBarRef} from '@angular/material/snack-bar';
import { CustomeSnackbarComponent } from '../../../../+shared/custome-snackbar/custome-snackbar.component';



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
    MatSnackBarAction,
    MatSnackBarActions,



  ]
})
export class BookDetailsComponent {
  private snackBar=inject(MatSnackBar);
  private fb = inject(FormBuilder);
  bookForm = this.fb.group({
    id: [null,[Validators.pattern("^[0-9]*$")]],
    title: [null, Validators.required],
    writer: [null, Validators.required],
    publisher: [null, Validators.required],
    price: [null, [Validators.pattern("^[0-9.]*$")]],

  });
  @Output() onCancel=new EventEmitter();
  @Output() onOk=new EventEmitter<Book>();
  submitClick(){
    this.onOk.emit(
      {
        id:this.bookForm.controls.id.value??0,
        title:this.bookForm.controls.title.value??'',
        writer:this.bookForm.controls.writer.value??'',
        publisher:this.bookForm.controls.publisher.value??'',
        price:this.bookForm.controls.price.value??0
      }
    );
    this.snackBar.openFromComponent(CustomeSnackbarComponent,{
      horizontalPosition:'right',
      verticalPosition:'bottom',
      panelClass:'success-snackbar',
      duration:700

    })
  }
}
