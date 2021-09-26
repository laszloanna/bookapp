import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"", component:BookListComponent},
  {path:"books", component:BookListComponent},
  {path:"profile", component:ProfileComponent},
  {path:"books/:_id", component:BookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
