import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
import { map } from "rxjs/internal/operators/map";
import {EnvironmentConfigService} from "../../../core/services/environment.config.service";



@Injectable()
export class HijriDateService {

  constructor(private http: HttpClient, private envConfig: EnvironmentConfigService) {}

  getHijriDate() {

    let url = 'https://api.aladhan.com/v1/gToH?date=' + HijriDateService.getCurrentDate();

    if (!this.envConfig.production) {
      return new Observable( observer =>
        observer.next({
          weekday: this.getWeekDay(),
          day: "12",
          month: "صَفَر",
          year: "1443"
        })
      )
    }
    else {
      return this.http.get<Observable<any>>(url).pipe(map((response : any) => {
        return {
          weekday: this.getWeekDay(),
          day: response.data.hijri.day,
          month: response.data.hijri.month.ar,
          year: response.data.hijri.year
        }
      }))
    }
  }

  private static getCurrentDate(): String {
    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    return (d < 10 ? '0' + d: d) + '-' + (m < 10 ? '0' + m : m) + '-' + y;
  }

  private getWeekDay(): String {
    let dateObj = new Date()
    let weekday = dateObj.toLocaleString("default", { weekday: "long" })
    return weekday;
  }
}
