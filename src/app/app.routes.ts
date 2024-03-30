import { Routes } from '@angular/router';
import { PublicNavComponent } from './+pages/+public/public-nav/public-nav.component';
import { PublicHomeComponent } from './+pages/+public/public-home/public-home.component';
import { PublicBooksComponent } from './+pages/+public/public-books/public-books.component';
import { PublicMembersComponent } from './+pages/+public/public-members/public-members.component';

export const routes: Routes = [
  {path:'public',component:PublicNavComponent,children:[
    {path:'home',component:PublicHomeComponent},
    {path:'books',component:PublicBooksComponent},
    {path:'members',component:PublicMembersComponent},
    {path:'',redirectTo:'home',pathMatch:'prefix'}
  ]},
  {path:'',redirectTo:'public',pathMatch:'full'},

];
