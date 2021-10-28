import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class KalamService {

  private host = 'http://192.168.2.114:3200/api/kalam'

  constructor(private http: HttpClient) { }

  getKalams(keyword: string, offset: number, pageSize: number) {
    return this.http.get(`${this.host}?keyword=${keyword}&offset=${offset}&pageSize=${pageSize}`).toPromise().catch((err) => {
      console.log(err.error.error)
    })
  }
}
