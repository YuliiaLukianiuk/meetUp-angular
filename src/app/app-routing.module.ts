import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstPageRegistrationComponent} from './first-page-registration/first-page-registration.component'
import { ThankPageComponent } from './thank-page/thank-page.component';
const routes: Routes = [
  { path: '', component: FirstPageRegistrationComponent },
  { path: 'last', component: ThankPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
