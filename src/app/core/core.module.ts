import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ThemeService} from "./services/theme.service";
import {LogoComponent} from "./components/logo/logo.component";
import {NavComponent} from "./components/nav/nav.component";
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { SettingsComponent } from './components/settings/settings/settings.component';
import { MatDialogModule } from "@angular/material/dialog";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSliderModule} from "@angular/material/slider";
import {SpringSpinnerModule} from "angular-epic-spinners";
import {AudioService} from "./components/audio-player/audio.service";
import {TrackService} from "./components/audio-player/track.service";



@NgModule({
  declarations: [
    LogoComponent,
    NavComponent,
    AudioPlayerComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSliderModule,
    SpringSpinnerModule
  ],
    exports: [
        LogoComponent,
        NavComponent,
        AudioPlayerComponent,
        SettingsComponent
    ],
  providers: [
    ThemeService
  ]
})
export class CoreModule { }
