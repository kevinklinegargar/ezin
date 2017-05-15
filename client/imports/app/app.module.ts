import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { LoginComponent } from "./authentication/login/login.component";
import { DemoDataService } from "./demo/demo-data.service";
import { MessageComponent } from "./message/message.component";
import { routes } from './app.routes';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    MessageComponent,
    DemoComponent,
    LoginComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    DemoDataService
  ],
  // Modules
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
