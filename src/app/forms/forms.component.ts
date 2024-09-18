import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  title: string = "Angular Forms";
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.createContactForm();
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      message: ['']
    });
  }

  onSubmit(){
    console.log("Your form Data: ", this.contactForm.value);
  }

  onSubmission2(form: NgForm){
    console.log("Your form Data: ", form.value);
  }

}
