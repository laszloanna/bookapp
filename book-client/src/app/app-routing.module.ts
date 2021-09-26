import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { NewBookComponent } from './book/new-book/new-book.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"", component:BookListComponent},
  {path:"profile", component:ProfileComponent},
  {path:"books/:_id", component:BookComponent},
  {path:"edit/:_id", component:NewBookComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
