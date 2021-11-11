import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../../../services/theme.service";

@Component({
  selector: 'si-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
  }

}
