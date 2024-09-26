import { Routes } from '@angular/router';

import { HomeComponent } from './pages/general/home/home.component';
import { LoginComponent } from './pages/general/login/login.component';
import { SignupComponent } from './pages/general/signup/signup.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';

import { AboutComponent } from './pages/general/about/about.component';
import { ExperienceComponent } from './pages/general/about/experience/experience.component';
import { SkillComponent } from './pages/general/about/skill/skill.component';

import { ContactComponent } from './pages/general/contact/contact.component';
import { MailingComponent } from './pages/general/contact/mailing/mailing.component';
import { MappingComponent } from './pages/general/contact/mapping/mapping.component';
import { WebsiteComponent } from './pages/general/contact/website/website.component';
import { TutorialsListComponent } from './frontend-for-tutorial/tutorials-list/tutorials-list.component';
import { TutorialsDetailsComponent } from './frontend-for-tutorial/tutorials-details/tutorials-details.component';
import { AddTutorialComponent } from './frontend-for-tutorial/add-tutorial/add-tutorial.component';
import { EmployeeListComponent } from './frontend-for-emp/employee-list/employee-list.component';
import { ShowDetailsComponent } from './frontend-for-emp/show-details/show-details.component';
import { AddEmployeeComponent } from './frontend-for-emp/add-employee/add-employee.component';
import { RunEmpProjectComponent } from './frontend-for-emp/run-emp-project/run-emp-project.component';

export const routes: Routes = [
    // {path: '', component: HomeComponent},
    // {path: 'login', component: LoginComponent},
    // {path: 'signup', component: SignupComponent},
    // {
    //     path: 'about', component: AboutComponent,
    //     children: [
    //         {path: '', component: ExperienceComponent},
    //         {path: 'experience', component: ExperienceComponent},
    //         {path: 'skill', component: SkillComponent},
    //     ],
    // },
    // {
    //     path: 'contact', component: ContactComponent,
    //     children: [
    //         {path: '', component: MailingComponent},
    //         {path: 'mailing', component: MailingComponent},
    //         {path: 'mapping', component: MappingComponent},
    //         {path: 'website', component: WebsiteComponent},
    //     ],
    // },
    // {path: '', redirectTo: 'show-all-employees', pathMatch: 'full'},
    // {path: 'home', component: HomeComponent2},
    // {path: 'login', component: AdminLoginComponent},
    // {path: 'updating-by-id/:id', component: UpdateEmployeeComponent},
    {path: 'run-emp-project', component: RunEmpProjectComponent},
    {path: 'add-employees', component: AddEmployeeComponent},
    {path: 'show-all-employees', component: EmployeeListComponent},
    {path: 'details-of-employes/:id', component: ShowDetailsComponent},
    {path: '**', component: NotFoundComponent}
    // {path: 'tutorials', component: TutorialsListComponent},
    // {path: 'tutorials/:id', component: TutorialsDetailsComponent},
    // {path: 'add', component: AddTutorialComponent}
];
