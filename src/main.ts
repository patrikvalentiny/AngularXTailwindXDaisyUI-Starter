import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import {provideHotToastConfig} from "@ngxpert/hot-toast";



bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule), provideHotToastConfig({
      duration: 3000,
      position: 'top-center',
      style:{
        backgroundColor: 'oklch(var(--b3))',
        color: 'oklch(var(--bc))',
      }
    })]
})
  .catch(err => console.error(err));
