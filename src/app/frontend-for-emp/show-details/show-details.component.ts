import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent {
  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    })
  }
}
