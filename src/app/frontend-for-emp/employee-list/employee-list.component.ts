import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[];
  enteredId: number;

  constructor(private employeeService: EmployeeService, private route: Router){}

  ngOnInit(): void {
    this.getEmployees();
  }

  goToEmployee(){
    console.log("ID looking for is ", this.enteredId);
    this.route.navigate(['details-of-employee', this.enteredId]);
  }

  getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: number){
    this.route.navigate(['updating-by-id', id]);
  }

  deleteEmployee(id: number){ // confirm is a javacript funciton via which we show a alert pop up with ok and cancel button
    if(confirm("Your sure, you want to delete this record: " + id)){
      this.employeeService.deleteEmployee(id).subscribe(data => {
        console.log("Employee Record Deleted:", data);
        this.getEmployees();
      });
    }
  }


  // with the help of navigate 
  detailsOfEmployee(id: number){
    this.route.navigate(['details-of-employee', id]);
  }

}
