import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {EnvironmentConfigService} from "../../core/services/environment.config.service";

@Injectable({
  providedIn: 'root'
})
export class KalamService {

  constructor(private http: HttpClient, private environmentConfig: EnvironmentConfigService) { }

  getKalams(keyword: string, offset: number, pageSize: number) {
    return this.http.get(`${this.environmentConfig.host}/api/kalam?keyword=${keyword}&offset=${offset}&pageSize=${pageSize}`).toPromise().catch((err) => {
      console.log(err.error.error)
    })
  }
}
