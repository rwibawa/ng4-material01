import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidenavDemoModule } from './sidenav-demo/sidenav-demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidenavDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
