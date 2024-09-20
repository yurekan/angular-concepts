import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FormsComponent } from './app/forms/forms.component';
import { DynamicFormArrayComponent } from './app/forms/dynamic-form-array/dynamic-form-array.component';
import { FormArraysComponent } from './app/forms/form-arrays/form-arrays.component';
import { FormControlsComponent } from './app/forms/form-controls/form-controls.component';
import { RunRoutingComponent } from './app/routing/run-routing/run-routing.component';
import { HttpClientComponent } from './app/http-client/http-client.component';

bootstrapApplication(HttpClientComponent, appConfig)
  .catch((err) => console.error(err));
