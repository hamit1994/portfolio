/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { PortfolioModule } from './app/portfolio/portfolio.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
