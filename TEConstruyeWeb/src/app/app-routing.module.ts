import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmenthoursComponent } from './assignmenthours/assignmenthours.component';
import { AssignmentprojectexpensesComponent } from './assignmentprojectexpenses/assignmentprojectexpenses.component';
import { AssignmentstagesComponent } from './assignmentstages/assignmentstages.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterclientComponent } from './registerclient/registerclient.component';
import { RegistereaComponent } from './registerea/registerea.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { RegistermaterialComponent } from './registermaterial/registermaterial.component';
import { RegisterstagesComponent } from './registerstages/registerstages.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WorkrecordComponent } from './workrecord/workrecord.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WelcomeComponent },
  { path: 'assignmenthours', component: AssignmenthoursComponent },
  { path: 'assignmentprojectexpenses', component:  AssignmentprojectexpensesComponent},
  { path: 'assignmentstages', component: AssignmentstagesComponent },
  { path: 'authentication', component:  AuthenticationComponent},
  { path: 'registerclient', component: RegisterclientComponent },
  { path: 'registerea', component: RegistereaComponent },
  { path: 'registeremployee', component: RegisteremployeeComponent },
  { path: 'registermaterial', component: RegistermaterialComponent },
  { path: 'registerstages', component: RegisterstagesComponent },
  { path: 'workrecord', component: WorkrecordComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
