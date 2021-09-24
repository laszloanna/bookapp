import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { NewBookComponent } from './book/new-book/new-book.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"books", component:BookListComponent},
  {path:"profile", component:ProfileComponent},
  {path:"book/:id", component:BookComponent},
  {path:"new", component:NewBookComponent} //temp
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
