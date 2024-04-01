import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CustomeSidenavComponent } from '../custome-sidenav/custome-sidenav.component';

@Component({
  selector: 'app-admins-nav',
  standalone: true,
  imports: [
    MatToolbarModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink,
    MatSidenavModule,
    CustomeSidenavComponent

  ],
  templateUrl: './admins-nav.component.html',
  styleUrl: './admins-nav.component.scss'
})
export class AdminsNavComponent {
  collapsed=signal(false);
  sideNavWidth=computed(() => this.collapsed() ? '65px' : '180px');
}
