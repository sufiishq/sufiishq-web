import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {KalamComponent} from "./kalam/kalam.component";
import {KalamService} from "./kalam/kalam.service";
import {MatButtonModule} from "@angular/material/button";
import {NgxSpinnerModule} from "ngx-spinner";



@NgModule({
  declarations: [
    KalamComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    NgxSpinnerModule
  ],
  exports: [
    KalamComponent
  ],
  providers: [
    KalamService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureModule { }