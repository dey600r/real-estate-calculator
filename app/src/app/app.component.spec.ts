import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

// PLUGINS
import { Platform } from '@ionic/angular';

// COMPONENTS
import { AppComponent } from './app.component';

// LIBRARIES
import { TranslateService } from '@ngx-translate/core';

// CONFIGURATION
import { SetupTest, SpyMockConfig, MockTranslate } from '@testing/index';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let platform: Platform;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule(SetupTest.config).compileComponents();
    translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    platform = TestBed.inject(Platform);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    component.initializeApp();
    fixture.detectChanges();
    await platform.ready();
    fixture.whenStable().then(() => {
      expect(platform.ready).toHaveBeenCalled();
    });
  });

  it('should translate app - ES', async () => {
    expect(translate.instant('COMMON.tab1')).toEqual(MockTranslate.ES.COMMON.tab1);
  });

  it('should translate app - EN', async () => {
    await translate.use('en').toPromise();
    expect(translate.instant('COMMON.tab1')).toEqual(MockTranslate.EN.COMMON.tab1);
  });

  // TODO: add more tests!

});
