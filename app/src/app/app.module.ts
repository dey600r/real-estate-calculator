import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// LIBRARIES IONIC

// LIBRARIES ANGULAR
import { TranslateModule, TranslateLoader, TranslateStore } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// UTILS
import { environment } from '@environment/environment';

// COMPONENTS
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [
  ],
  providers: [
    TranslateStore,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, environment.pathTranslate, '.json');
}
