import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistereaComponent } from './registerea/registerea.component';
import { RegistermaterialComponent } from './registermaterial/registermaterial.component';
import { RegisterclientComponent } from './registerclient/registerclient.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { RegisterstagesComponent } from './registerstages/registerstages.component';
import { AssignmenthoursComponent } from './assignmenthours/assignmenthours.component';
import { AssignmentprojectexpensesComponent } from './assignmentprojectexpenses/assignmentprojectexpenses.component';
import { WorkrecordComponent } from './workrecord/workrecord.component';
import { AssignmentstagesComponent } from './assignmentstages/assignmentstages.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AuthenticationComponent,
    RegistereaComponent,
    RegistermaterialComponent,
    RegisterclientComponent,
    RegisteremployeeComponent,
    RegisterstagesComponent,
    AssignmenthoursComponent,
    AssignmentprojectexpensesComponent,
    WorkrecordComponent,
    AssignmentstagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
