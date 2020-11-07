import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {PagesModule} from './pages/pages.module';
import {HelpersModule} from './helpers/helpers.module';
import {ServicesModule} from './services/services.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {DynamicDialogModule} from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PagesModule,
    HelpersModule,
    BrowserModule,
    ServicesModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
