import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HijriDateComponent } from "./components/hijri-date/hijri-date.component";
import { HijriDateService } from "./components/hijri-date/hijri-date.service";
import { HttpClientModule } from "@angular/common/http";
import { LoopingRhumbusesSpinnerModule } from "angular-epic-spinners";
import { MatButtonModule} from "@angular/material/button";
import { DividerComponent } from './components/divider/divider.component';
import { AndroidAppBadgeComponent } from './android-app-badge/android-app-badge.component';



@NgModule({
  declarations: [
    HijriDateComponent,
    DividerComponent,
    AndroidAppBadgeComponent
  ],
  exports: [
    HijriDateComponent,
    DividerComponent,
    AndroidAppBadgeComponent
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
