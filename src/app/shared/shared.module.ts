import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HijriDateComponent } from "./components/hijri-date/hijri-date.component";
import { HijriDateService } from "./components/hijri-date/hijri-date.service";
import { HttpClientModule } from "@angular/common/http";
import { LoopingRhumbusesSpinnerModule } from "angular-epic-spinners";
import { ButtonComponent } from './components/button/button.component';
import {MatButton, MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    HijriDateComponent
  ],
  exports: [
    HijriDateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LoopingRhumbusesSpinnerModule,
    MatButtonModule
  ],
  providers: [
    HijriDateService
  ]
})
export class SharedModule { }
