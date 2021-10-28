import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {MatDialog} from "@angular/material/dialog";
import {SettingsComponent} from "../settings/settings/settings.component";
import {Router} from "@angular/router";

@Component({
  selector: 'si-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navigation: any[]

  constructor(public themeService: ThemeService, public dialog: MatDialog, private router: Router) {
    this.navigation = [
      {id: 1, icon: 'kalam', text: 'Kalam', route: ''},
      {id: 2, icon: 'drum', text: 'Urs', route: 'urs'},
      {id: 3, icon: 'dish', text: 'Niaz', route: 'niaz'},
      {id: 4, icon: 'pin', text: 'Location', route: 'location'},
      {id: 5, icon: 'contact', text: 'Contact', route: 'contact'},
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

      default:
        this.router.navigate([navigation.route])
        break;
    }
  }

}
