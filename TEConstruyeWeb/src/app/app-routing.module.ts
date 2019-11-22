import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
//import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { AssignmenthoursComponent } from './assignmenthours/assignmenthours.component';
import { AssignmentmaterialComponent } from './assignmentmaterial/assignmentmaterial.component';
import { AssignmentprojectexpensesComponent } from './assignmentprojectexpenses/assignmentprojectexpenses.component';
import { AssignmentstagesComponent } from './assignmentstages/assignmentstages.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { GeneratebudgetComponent } from './generatebudget/generatebudget.component';
import { GeneratepayrollComponent } from './generatepayroll/generatepayroll.component';
import { GenerationbudgetComponent } from './generationbudget/generationbudget.component';
import { RegisterclientComponent } from './registerclient/registerclient.component';
import { RegistereaComponent } from './registerea/registerea.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { RegistermaterialComponent } from './registermaterial/registermaterial.component';
import { RegisterstagesComponent } from './registerstages/registerstages.component';
import { ReportexpenseComponent } from './reportexpense/reportexpense.component';
import { ReportstatusComponent } from './reportstatus/reportstatus.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeadminComponent } from './welcomeadmin/welcomeadmin.component';
import { WelcomeeaComponent } from './welcomeea/welcomeea.component';
import { WorkrecordComponent } from './workrecord/workrecord.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WelcomeComponent },
  { path: 'assignmenthours', component: AssignmenthoursComponent },
  { path: 'assignmentmaterial', component: AssignmentmaterialComponent },
  { path: 'assignmentprojectexpenses', component:  AssignmentprojectexpensesComponent},
  { path: 'assignmentstages', component: AssignmentstagesComponent },
  { path: 'authentication', component:  AuthenticationComponent},
  { path: 'generatebudget', component: GeneratebudgetComponent },
  { path: 'generatepayroll', component: GeneratepayrollComponent },
  { path: 'generationbudget', component: GenerationbudgetComponent },
  { path: 'registerclient', component: RegisterclientComponent },
  { path: 'registerea', component: RegistereaComponent },
  { path: 'registeremployee', component: RegisteremployeeComponent },
  { path: 'registermaterial', component: RegistermaterialComponent },
  { path: 'registerstages', component: RegisterstagesComponent },
  { path: 'reportexpense', component: ReportexpenseComponent },
  { path: 'reportstatus', component: ReportstatusComponent },
  { path: 'welcomeadmin', component: WelcomeadminComponent },
  { path: 'welcomeea', component: WelcomeeaComponent },
  { path: 'workrecord', component: WorkrecordComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
