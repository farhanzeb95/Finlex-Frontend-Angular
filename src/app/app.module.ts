import { ApiService } from './api.service';
import { ContractObjectsComponent } from './contract-objects/contract-objects.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
// Material Imports
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    ContractObjectsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatCardModule

  ],
  providers: [ FlexLayoutModule,
  ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
