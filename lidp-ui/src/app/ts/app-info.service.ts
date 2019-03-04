import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface AppInfo {
  name: string;
  date: string;
}

@Injectable()
export class AppInfoService {
  configUrl = 'http://localhost/appInfo';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
