import { Injectable } from '@angular/core';

/*@Injectable({
  providedIn: 'root'
})*/
export class ThemeService {

  isDark: boolean = true;

  toggle() {
    this.isDark = !this.isDark
  }
}
