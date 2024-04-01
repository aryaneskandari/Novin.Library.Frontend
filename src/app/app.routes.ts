import { Routes } from '@angular/router';
import { PublicNavComponent } from './+pages/+public/public-nav/public-nav.component';
import { PublicHomeComponent } from './+pages/+public/public-home/public-home.component';
import { PublicBooksComponent } from './+pages/+public/public-books/public-books.component';
import { PublicMembersComponent } from './+pages/+public/public-members/public-members.component';
import { LibrariansNavComponent } from './+pages/+librarians/librarians-nav/librarians-nav.component';
import { LibrariansHomeComponent } from './+pages/+librarians/librarians-home/librarians-home.component';
import { LibrariansBooksComponent } from './+pages/+librarians/librarians-books/librarians-books.component';
import { LibrariansMembersComponent } from './+pages/+librarians/librarians-members/librarians-members.component';

export const routes: Routes = [
  {path:'public',component:PublicNavComponent,children:[
    {path:'home',component:PublicHomeComponent},
    {path:'books',component:PublicBooksComponent},
    {path:'members',component:PublicMembersComponent},
    {path:'',redirectTo:'home',pathMatch:'prefix'}
  ]},
  {path:'librarians',component:LibrariansNavComponent,children:[
    {path:'home',component:LibrariansHomeComponent},
    {path:'books',component:LibrariansBooksComponent},
    {path:'members',component:LibrariansMembersComponent},
    {path:'borrows',component:LibrariansBooksComponent},
    {path:'',redirectTo:'home',pathMatch:'prefix'},
    {path:'**',redirectTo:'/home'},
  ]},
  {path:'',redirectTo:'/librarians',pathMatch:'full'}


];
