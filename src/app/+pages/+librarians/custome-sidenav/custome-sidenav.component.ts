import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-custome-sidenav',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    CommonModule,
    RouterLink,
    RouterModule,
    RouterOutlet

  ],
  templateUrl: './custome-sidenav.component.html',
  styleUrl: './custome-sidenav.component.scss'
})
export class CustomeSidenavComponent {
  sideNavCollapsed=signal(false);

  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val);
  };

  menuItems=signal<MenuItme[]>([
    {
      icon:'home',
      label:'صفحه اصلی',
      route:'home'
    },
    {
      icon:'import_export',
      label:'امانات',
      route:'borrows'
    },
    {
      icon:'menu_book',
      label:'کتابها',
      route:'books'
    },
    {
      icon:'manage_accounts',
      label:'کاربران',
      route:'members'
    }
  ]);

  profilePicSize=computed(() => this.sideNavCollapsed() ? '50':'100');
}

export type MenuItme={
  icon:string;
  label:string;
  route:string
}
