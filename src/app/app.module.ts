import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateComponent } from '@template/template.component';
import { MenuComponent } from '@template/menu/menu.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
