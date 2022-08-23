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
      {id: 2, icon: 'drum', text: 'Urs / Niaz', route: 'urs'},
      {id: 3, icon: 'pin', text: 'Location', route: 'location'},
      {id: 4, icon: 'info', text: 'About', route: 'about'}
    ]
  }

  ngOnInit(): void {
  }

  handleNavigationClicked(navigation: any) {
    this.router.navigate([navigation.route])
  }

}
