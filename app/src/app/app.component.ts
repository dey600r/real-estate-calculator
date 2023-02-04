import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private translator: TranslateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
       // TRANSLATOR
       let userLang = navigator.language.split('-')[0];
       userLang = /(es|en)/gi.test(userLang) ? userLang : 'en';
       this.translator.use(userLang);
    }).finally(() => {
      // CONFIGURATION

    });
  }
}
