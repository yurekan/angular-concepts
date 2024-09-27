import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Admin } from '../model/admin';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router){}

  showAlert: boolean = false;
  currentAdmin: Admin = new Admin();
  adminList: Admin[] = [];
  confirmPassword: string = '';
  isPresent: boolean = false;
  isMatched: boolean = false;

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

  checkPassword(){
    for(let _admin of this.adminList){
      if(_admin.adminName === this.currentAdmin.adminName){
        this.isPresent = true;
        if(this.currentAdmin.adminPassword === this.confirmPassword){
          this.isMatched = true;
          this.adminService.updateAdmin(this.currentAdmin.adminName, this.currentAdmin).subscribe({
            next: (value) => {
              console.log("Admin Password Changes: ", value);
              setTimeout(() =>{
                this.goToLoginPage();
              }, 2000);
            },
            error: (e) => console.error(e)
          });
        }
      }
    }
  }

  goToLoginPage(){
    this.router.navigate(['/login']);
  }

  onSubmit(){
    this.showAlert = true;
    console.log("Save admin data as ", this.currentAdmin);
    this.checkPassword();
  }
}
