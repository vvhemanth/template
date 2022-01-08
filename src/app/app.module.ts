import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { Javascript1Component } from './javascript1/javascript1.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    ResponsiveComponent,
    JavascriptComponent,
    Javascript1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
