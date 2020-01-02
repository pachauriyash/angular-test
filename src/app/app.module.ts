import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestdirectiveDirective } from './testdirective.directive';
import { AppNotDirective } from './app-not.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestdirectiveDirective,
    AppNotDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
