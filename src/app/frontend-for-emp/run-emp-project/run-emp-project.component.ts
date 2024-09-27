import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-run-emp-project',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './run-emp-project.component.html',
  styleUrl: './run-emp-project.component.css'
})
export class RunEmpProjectComponent {
  isValid: boolean = false;
}
