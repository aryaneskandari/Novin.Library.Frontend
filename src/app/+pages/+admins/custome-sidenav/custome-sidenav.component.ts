import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-custome-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
    RouterLink,
  ],
  templateUrl: './custome-sidenav.component.html',
  styleUrl: './custome-sidenav.component.scss'
})
export class CustomeSidenavComponent {
  menuItems=signal<MenuItem[]>([
    {
      icon:'home',
      label:'صفحه اصلی',
      route:'home'
    },
    {
      icon:'manage_accounts',
      label:'کاربران',
      route:'librarians'
    }
  ]);
  sideNavCollapsed=signal(false);
  @Input() set collapsed(val:boolean){
    this.sideNavCollapsed.set(val);
  };
  profilePicSize=computed(() => this.sideNavCollapsed() ? '50':'100');
}

export type MenuItem={
  icon:string;
  label:string;
  route?:string;
}
