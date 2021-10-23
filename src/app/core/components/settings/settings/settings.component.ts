import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../../../services/theme.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public themeService: ThemeService, private dialog: MatDialogRef<SettingsComponent>) {}

  ngOnInit(): void {
  }

  close(): void {
    this.dialog.close()
  }
}
