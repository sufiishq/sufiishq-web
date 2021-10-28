import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {FeatureModule} from "./features/feature.module";
import {TrackService} from "./core/components/audio-player/track.service";
import {AudioService} from "./core/components/audio-player/audio.service";
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FeatureModule
  ],
  providers: [
    AudioService,
    TrackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
