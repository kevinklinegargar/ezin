import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { MainComponent } from "./dashboard/main/main.component";
import { ChannelsComponent } from "./dashboard/channels/channels.component";
import { LoginComponent } from "./authentication/login/login.component";
import { HeaderComponent } from "./dashboard/main/header/header.component";
import { SignupComponent } from "./authentication/signup/signup.component";
import { DemoDataService } from "./demo/demo-data.service";
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    ChannelsComponent,
    HeaderComponent
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
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
