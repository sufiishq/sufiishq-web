import { Component } from '@angular/core';
import { ThemeService } from "./core/services/theme.service";
import {TrackService} from "./core/components/audio-player/track.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //slider = new MDCSlider(document.querySelector('.mdc-slider'));
  constructor(public themeService: ThemeService, public trackService: TrackService) {
  }
}
