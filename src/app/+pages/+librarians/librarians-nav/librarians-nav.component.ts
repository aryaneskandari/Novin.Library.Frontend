import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CustomeSidenavComponent } from '../custome-sidenav/custome-sidenav.component';


@Component({
  selector: 'app-librarians-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    CustomeSidenavComponent,
    CommonModule,

  ],
  templateUrl: './librarians-nav.component.html',
  styleUrl: './librarians-nav.component.scss'
})
export class LibrariansNavComponent {
 collapsed=signal(false);
 sideNavWidth=computed(() => this.collapsed() ? '65px' : '180px');

}
