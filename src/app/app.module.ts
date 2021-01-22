import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConteinerForm } from './container-form/conteiner-form.component';
import { Form } from './form/form.component';
import { INFO } from './info/info.component';
import { RegistFormComponent } from './regist-form/regist-form.component';
import { ThankPageComponent } from './thank-page/thank-page.component';
import { FirstPageRegistrationComponent} from './first-page-registration/first-page-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IMaskModule } from "angular-imask"


@NgModule({
  declarations: [
    AppComponent,
    ConteinerForm,
    Form,
    INFO,
    RegistFormComponent,
    ThankPageComponent,
    FirstPageRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    IMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
