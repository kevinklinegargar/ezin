import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { LoginComponent } from "./authentication/login/login.component";
import { SignupComponent } from "./authentication/signup/signup.component";
import { DemoDataService } from "./demo/demo-data.service";
import { MessageComponent } from "./message/message.component";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    MessageComponent,
    DemoComponent,
    LoginComponent,
    SignupComponent
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
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
