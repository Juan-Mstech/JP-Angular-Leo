import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjmetodoComponent } from './ejmetodo/ejmetodo.component';
@NgModule({
  declarations: [
    AppComponent,
    EjpropertybindingComponent,
    EjmetodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


