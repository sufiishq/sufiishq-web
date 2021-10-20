import { Component, OnInit } from '@angular/core'
import {ThemeService} from "../../../core/services/theme.service";

@Component({
  selector: 'si-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

}
