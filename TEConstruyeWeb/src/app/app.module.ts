import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

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
import { WelcomeadminComponent } from './welcomeadmin/welcomeadmin.component';
import { WelcomeeaComponent } from './welcomeea/welcomeea.component';
import { AssignmentmaterialComponent } from './assignmentmaterial/assignmentmaterial.component';
import { GenerationbudgetComponent } from './generationbudget/generationbudget.component';
import { GeneratebudgetComponent } from './generatebudget/generatebudget.component';
import { GeneratepayrollComponent } from './generatepayroll/generatepayroll.component';
import { ReportexpenseComponent } from './reportexpense/reportexpense.component';
import { ReportstatusComponent } from './reportstatus/reportstatus.component';
import { StagesComponent } from './stages/stages.component';

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
    WelcomeadminComponent,
    WelcomeeaComponent,
    AssignmentmaterialComponent,
    GenerationbudgetComponent,
    GeneratebudgetComponent,
    GeneratepayrollComponent,
    ReportexpenseComponent,
    ReportstatusComponent,
    StagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
