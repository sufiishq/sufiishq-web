import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EnvironmentConfigService {

  production = environment.production
  host = environment.host

  constructor() { }
}
