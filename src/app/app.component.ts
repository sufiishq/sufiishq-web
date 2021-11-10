import { Component } from '@angular/core';
import { ThemeService } from "./core/services/theme.service";
import {TrackService} from "./core/components/audio-player/track.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public themeService: ThemeService, public trackService: TrackService, private titleService: Title) {
    titleService.setTitle("SufiIshq")
  }
}
