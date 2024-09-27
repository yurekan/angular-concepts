import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Admin } from '../model/admin';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private adminService: AdminService, private router: Router){}

  newAdmin: Admin = new Admin();
  showAlert: boolean = false;

  saveAdmin(){
    this.adminService.addAdmin(this.newAdmin).subscribe({
      next: (value) => {
        console.log("New Admin Saved: ", value);
        setTimeout(() =>{
          this.goToLoginPage();
        }, 2000);
      },
      error: (e) => console.error(e)
    });
  }

  goToLoginPage(){
    this.router.navigate(['/login']);
  }

  onSubmit(){
    this.showAlert = true;
    console.log("Save admin data as ", this.newAdmin);
    this.saveAdmin();
  }

}
