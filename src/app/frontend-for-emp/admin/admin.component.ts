import { booleanAttribute, Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AdminService } from '../service/admin.service';
import { Router, RouterLink } from '@angular/router';
import { Admin } from '../model/admin';
import { CommonModule } from '@angular/common';
import { RunEmpProjectComponent } from '../run-emp-project/run-emp-project.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RunEmpProjectComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{

  constructor(private adminService: AdminService, private router: Router, 
    private runEmpProject: RunEmpProjectComponent){}
  submitForm: NgForm;
  adminList: Admin[] = [];
  currentAdmin: Admin = new Admin();
  isPresent: boolean;
  isValid: boolean;
  showAlert: boolean = false;

  ngOnInit(): void {
    this.getAllAdmin();
  }

  getAllAdmin(){
    this.adminService.getAdminList().subscribe({
      next: (value) => {
        this.adminList = value;
        console.log(value);
      },
      error: (e) => console.error(e)
    });
  }

  authenticateAdmin(admin: Admin){
    this.isPresent = false;
    this.isValid = false;
    for(var _admin of this.adminList) {
      if(_admin.adminName === admin.adminName && _admin.adminPassword === admin.adminPassword){
        this.isValid = true;
        this.runEmpProject.isValid = this.isValid;
        console.log("Login Successful");
        break;
      } else if(_admin.adminName === admin.adminName && _admin.adminPassword !== admin.adminPassword){
        this.isPresent = true;
        console.log("Incorrect Password");
        break;
      } 
    }
    if(!this.isPresent){
      console.log("No Admin Found");
    } 
  }

  onSubmit(){
    this.showAlert = true;
    this.authenticateAdmin(this.currentAdmin);
    if(this.isValid){
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
    }
  }
}
