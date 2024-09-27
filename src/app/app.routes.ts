import { Routes } from '@angular/router';

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
import { UpdateEmployeeComponent } from './frontend-for-emp/update-employee/update-employee.component';
import { HomeComponent } from './frontend-for-emp/home/home.component';
import { AdminComponent } from './frontend-for-emp/admin/admin.component';
import { RegisterComponent } from './frontend-for-emp/register/register.component';
import { ForgotPasswordComponent } from './frontend-for-emp/forgot-password/forgot-password.component';

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
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: AdminComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'run-emp-project', component: RunEmpProjectComponent},
    {path: 'add-employees', component: AddEmployeeComponent},
    {path: 'show-all-employees', component: EmployeeListComponent},
    {path: 'details-of-employee/:id', component: ShowDetailsComponent},
    {path: 'updating-by-id/:id', component: UpdateEmployeeComponent},
    {path: '**', component: NotFoundComponent}
    // {path: 'tutorials', component: TutorialsListComponent},
    // {path: 'tutorials/:id', component: TutorialsDetailsComponent},
    // {path: 'add', component: AddTutorialComponent}
];
