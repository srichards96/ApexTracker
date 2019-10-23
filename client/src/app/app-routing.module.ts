import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLookupComponent } from './components/user-lookup/user-lookup.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


const routes: Routes = [
  {
    path: '',
    component: UserLookupComponent
  },
  {
    path: ':platform/:name',
    component: UserDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
