import { Component } from '@angular/core';
import { ThemeService } from "./core/services/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //slider = new MDCSlider(document.querySelector('.mdc-slider'));
  constructor(public themeService: ThemeService) {
  }
}
