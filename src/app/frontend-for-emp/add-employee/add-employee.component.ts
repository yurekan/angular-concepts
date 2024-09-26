import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Employee } from '../model/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  constructor (private employeeService: EmployeeService, private route: Router){}

  submitForm: NgForm;

  employee: Employee = new Employee();

  saveEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      console.log("Data Saved is", data);
      this.goToEmployeesList();
    },
    error => console.error(error)
  );
  }
  
  goToEmployeesList(){
    this.route.navigate(['/show-all-employees']);
  }

  onSubmit(){
    console.log("Save employee data as ", this.employee);
    this.saveEmployee();
  }
}
