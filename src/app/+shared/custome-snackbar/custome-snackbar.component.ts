import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-custome-snackbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    
  ],
  templateUrl: './custome-snackbar.component.html',
  styleUrl: './custome-snackbar.component.scss'
})
export class CustomeSnackbarComponent {

}
