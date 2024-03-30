import { Component, computed, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { CustomeSidenavComponent } from '../custome-sidenav/custome-sidenav.component';
import { single } from 'rxjs';

@Component({
  selector: 'app-public-nav',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    RouterOutlet,
    CustomeSidenavComponent

  ],
  templateUrl: './public-nav.component.html',
  styleUrl: './public-nav.component.scss'
})
export class PublicNavComponent {
 collapsed=signal(false);
  sidenavWidth=computed(() => this.collapsed() ? '65px' : '180px');
}
