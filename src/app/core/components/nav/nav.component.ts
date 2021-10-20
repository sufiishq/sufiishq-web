import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'si-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navgation: any[]

  constructor(public themeService: ThemeService) {
    this.navgation = [
      {icon: 'kalam', text: 'Kalam'},
      {icon: 'drum', text: 'Urs'},
      {icon: 'dish', text: 'Niaz'},
      {icon: 'pin', text: 'Locaion'},
      {icon: 'contact', text: 'Contact'},
      {icon: 'settings', text: 'Settings'}
    ]
  }

  ngOnInit(): void {
  }

}
