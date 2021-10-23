import { Injectable } from '@angular/core';

/*@Injectable({
  providedIn: 'root'
})*/
export class ThemeService {

  isDark: boolean = window.localStorage.getItem("theme") == "0" ? true : false;

  toggle(event: any) {
    this.isDark = !this.isDark
    window.localStorage.setItem("theme", this.isDark ? "0": "1")
  }

  get logo(): string {
    return this.isDark ? 'si-logo-dark' : 'si-logo-light'
  }


  get text(): string {
    return this.isDark ? 'si-text-dark' : 'si-text-light'
  }

  get icon(): string {
    return this.isDark ? 'si-icon-dark' : 'si-icon-light'
  }

  get paneHeadBackground(): string {
    return this.isDark ? 'si-panel-head-bg-dark' : 'si-panel-head-bg-light'
  }

  get paneBodyBackground(): string {
    return this.isDark ? 'si-panel-body-bg-dark' : 'si-panel-body-bg-light'
  }

  get audioIcon(): string {
    return this.isDark ? 'si-audio-icon-dark' : 'si-audio-icon-light'
  }

  get audioSeekbar(): string {
    return this.isDark ? 'si-seekbar-dark' : 'si-seekbar-light'
  }
}
