import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavigateCompComponent} from './navigate-comp/navigate-comp.component';
import { EligibilityCalcComponent } from './eligibility-calc/eligibility-calc.component';
import { FormsModule } from '@angular/forms';

import { CommonModule, CurrencyPipe} from '@angular/common';
import { OpenDetailComponent } from './open-detail/open-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateCompComponent,
    EligibilityCalcComponent,
    OpenDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
    // MDBBootstrapModule.forRoot()
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
