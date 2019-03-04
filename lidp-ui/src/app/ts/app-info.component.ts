import { Component } from '@angular/core';
import { AppInfo, AppInfoService } from './app-info.service';

@Component({
  selector: 'app-info',
  templateUrl: '../html/app-info.component.html',
  providers: [ AppInfoService ],
  styleUrls: ['../css/app-info.component.css']
})
export class AppInfoComponent {

  error: any;
  headers: string[];
  config: AppInfo;

  constructor(private appInfoService: AppInfoService) {
    this.clear();
    this.showConfig();
  }

  clear() {
    this.config = {name: '', date: ''};
    this.error = undefined;
    this.headers = undefined;
  }

  showConfig() {
    this.appInfoService.getConfig()
      .subscribe(
        (data: AppInfo) => this.config = { ...data },
        error => this.error = error
      );
  }
}
