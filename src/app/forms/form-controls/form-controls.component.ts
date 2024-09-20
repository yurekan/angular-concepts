import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-controls',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-controls.component.html',
  styleUrl: './form-controls.component.css'
})
export class FormControlsComponent {
  myControl = new FormControl('default value');
  myControlWithDefault = new FormControl('default value', {
    initialValueIsDefault: true
  });
}
