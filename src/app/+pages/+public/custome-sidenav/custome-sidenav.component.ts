import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';

export type MenuItem={
  icon:string;
  label:string;
  route:string;
}

@Component({
  selector: 'app-custome-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    RouterLink
  ],
  templateUrl: './custome-sidenav.component.html',
  styleUrl: './custome-sidenav.component.scss'
})


export class CustomeSidenavComponent {
  sideNavCollapsed=signal(false);

  @Input() set collapsed(val:boolean){
    this.sideNavCollapsed.set(val);
  }
  menuItems=signal<MenuItem[]>([
    {
      icon:'home',
      label:'صفحه اصلی',
      route:'home',
    },
    {
      icon:'local_library',
      label:'کتابها',
      route:'books'
    },
    {
      icon:'group',
      label:'اعضا',
      route:'members'
    },
  ]);
  profilePicSize=computed(() => this.sideNavCollapsed() ? '50':'100')
}

