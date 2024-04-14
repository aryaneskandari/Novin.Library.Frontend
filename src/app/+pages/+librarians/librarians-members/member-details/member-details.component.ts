import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { CustomValidators } from '../../../../+shared/+validators/noSpaceAllowed.validators';
import {MatSnackBar, MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel, MatSnackBarModule, MatSnackBarRef} from '@angular/material/snack-bar';
import { Member } from '../../../../+models/member';
import { CustomeSnackbarComponent } from '../../../../+shared/custome-snackbar/custome-snackbar.component';

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
    MatSnackBarModule,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction

  ],
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.scss'
})
export class MemberDetailsComponent {
  private snackBar=inject(MatSnackBar);

  private fb = inject(FormBuilder);
  memberForm = this.fb.group({
    id: [null,[Validators.pattern("^[0-9]*$"),]], //noSpaceAllowed
    fullname: [null, [Validators.required]],
    phoneNumber: [null, [Validators.required,Validators.pattern("(09)[0-9 ]{9}")]], //noSpceAllowed
    major: [null,],
    gender: [null, [Validators.required]],
    address: null,
    email: [null,Validators.email],
  });
  @Output() onCancel=new EventEmitter();
  @Output() onOk=new EventEmitter<Member>();
  submitClick() {
    this.onOk.emit(
      {
        id:this.memberForm.controls.id.value??0,
        fullname:this.memberForm.controls.fullname.value??'',
        phoneNumber:this.memberForm.controls.phoneNumber.value??'',
        major:this.memberForm.controls.major.value??'',
        gender:this.memberForm.controls.gender.value??'',
        address:this.memberForm.controls.address.value??'',
        email:this.memberForm.controls.email.value??''
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
