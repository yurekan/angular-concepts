import { Component } from '@angular/core';
import { Customer } from '../customer';
import { FormsModule } from '@angular/forms';
import { LifecycleHooksComponent } from '../lifecycle-hooks/lifecycle-hooks.component';

@Component({
  selector: 'app-run-lfh-component',
  standalone: true,
  imports: [FormsModule, LifecycleHooksComponent],
  templateUrl: './run-lfh-component.component.html',
  styleUrl: './run-lfh-component.component.css'
})
export class RunLfhComponentComponent {
  title: 'ngOnChanges Page';
  message = ''; // message is declared as a input variable in lifecycle hook component class 
  // and displayed via its own html file.
  customer: Customer = new Customer();
  name = '';
  code = 0;

  updateCustomer(){
    this.customer = {name: this.name, code: this.code};
  }
}
