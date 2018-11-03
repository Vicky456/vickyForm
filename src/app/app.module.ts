import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTitleComponent } from './form/form-title/form-title.component';
import { FormBodyComponent } from './form/form-body/form-body.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTitleComponent,
    FormBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
