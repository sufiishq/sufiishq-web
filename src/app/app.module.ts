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
import {RouterModule} from "@angular/router";
import {KalamComponent} from "./features/kalam/kalam.component";
import {UrsComponent} from "./features/urs/urs.component";
import {LocationComponent} from "./features/location/location.component";
import {EnvironmentConfigService} from "./core/services/environment.config.service";
import {ContactComponent} from "./features/contact/contact.component";

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
    FeatureModule,
    RouterModule.forRoot([
      { path: 'urs', component: UrsComponent },
      { path: 'location', component: LocationComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', component: KalamComponent }
    ])
  ],
  providers: [
    AudioService,
    TrackService,
    EnvironmentConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
