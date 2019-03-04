import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Material
import { MaterialComponents } from './material';

// UI Components
import { HelloComponent } from './ts/hello.component';
import { OpenSnackComponent } from './ts/open-snack.component';
import { CardGridComponent} from './ts/card-grid.component';
import { AgeComponent } from './ts/age.component';
import { AppInfoComponent } from './ts/app-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    OpenSnackComponent,
    CardGridComponent,
    AgeComponent,
    AppInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
