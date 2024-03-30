import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import {
  provideServerRendering,
  ɵSERVER_CONTEXT as SERVER_CONTEXT,
} from '@angular/platform-server';

import { appConfig } from './app.config';
import { AppStateService } from './services/app.store.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    { provide: SERVER_CONTEXT, useValue: 'ssr-analog' },
    { provide: AppStateService, useClass: AppStateService },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
