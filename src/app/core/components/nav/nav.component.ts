import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {MatDialog} from "@angular/material/dialog";
import {SettingsComponent} from "../settings/settings/settings.component";

@Component({
  selector: 'si-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navigation: any[]

  constructor(public themeService: ThemeService, public dialog: MatDialog) {
    this.navigation = [
      {id: 1, icon: 'kalam', text: 'Kalam'},
      {id: 2, icon: 'drum', text: 'Urs'},
      {id: 3, icon: 'dish', text: 'Niaz'},
      {id: 4, icon: 'pin', text: 'Locaion'},
      {id: 5, icon: 'contact', text: 'Contact'},
      {id: 6, icon: 'settings', text: 'Settings'}
    ]
  }

  ngOnInit(): void {
  }

  handleNavigationClicked(navigation: any) {
    switch (navigation.id) {

      // handle settings click
      case 6:
        this.dialog.open(SettingsComponent, {
          width: '400px',
          height: '200px'
        })
        break;
    }
  }

}
