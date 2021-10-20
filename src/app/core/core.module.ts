import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ThemeService} from "./services/theme.service";
import {LogoComponent} from "./components/logo/logo.component";
import {NavComponent} from "./components/nav/nav.component";
import { AudioPlayerComponent } from './components/audio-player/audio-player/audio-player.component';



@NgModule({
  declarations: [
    LogoComponent,
    NavComponent,
    AudioPlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    NavComponent
  ],
  providers: [
    ThemeService
  ]
})
export class CoreModule { }
