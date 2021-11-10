import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../../core/services/theme.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

  gotoWhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=+923122672245', '_blank')
  }
}
