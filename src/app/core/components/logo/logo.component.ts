import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'si-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

}
