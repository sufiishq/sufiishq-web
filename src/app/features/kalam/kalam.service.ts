import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class KalamService {

  private host = `${environment.host}/api/kalam`

  constructor(private http: HttpClient) { }

  getKalams(keyword: string, offset: number, pageSize: number) {
    console.log(this.host)
    return this.http.get(`${this.host}?keyword=${keyword}&offset=${offset}&pageSize=${pageSize}`).toPromise().catch((err) => {
      console.log(err.error.error)
    })
  }
}
