import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {CommonModule, registerLocaleData} from '@angular/common';
import {HeaderComponent} from './common/header/header.component';
import {RawDataService} from './services/rawdata.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {FormsModule} from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SplitQueryPipe } from './common/pipes/split-query.pipe';
import ru from '@angular/common/locales/ru'

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SplitQueryPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    BrowserAnimationsModule
  ],
  providers: [
    RawDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
