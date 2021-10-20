import { Component, OnInit } from '@angular/core'
import {HijriDateService} from "./hijri-date.service"
import {ThemeService} from "../../../core/services/theme.service";

@Component({
  selector: 'si-hijri-date-widget',
  templateUrl: './hijri-date.component.html',
  styleUrls: ['./hijri-date.component.css']
})
export class HijriDateComponent implements OnInit {

  hijriDate: any
  hasError = false
  isLoading = true

  constructor(private hijriDateService: HijriDateService, public themeService: ThemeService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadHijriDate()
    }, 1000)
  }

  private loadHijriDate() {

    this.hasError = false
    this.isLoading = true

    this.hijriDateService
      .getHijriDate()
      .subscribe(response => {
        this.isLoading = false
        this.hijriDate = response
      }, error => {
        this.isLoading = false
        this.hasError = true
      })
  }

  retry() {
    this.hasError = false // temporary
    this.isLoading = true // temporary
    setTimeout(() => this.loadHijriDate(), 2000) // temporary should be called without timeout
  }

}
