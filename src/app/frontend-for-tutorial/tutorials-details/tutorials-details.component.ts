import { Component, Input, OnInit } from '@angular/core';
import { Tutorial } from '../model/tutorial.model';
import { TutotorialService } from '../services/tutorial.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tutorials-details',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './tutorials-details.component.html',
  styleUrl: './tutorials-details.component.css'
})
export class TutorialsDetailsComponent implements OnInit{

  @Input() viewMode = false;
  @Input() currentTutorial: Tutorial = {
    id: '',
    title: '',
    description: '',
    published: false
  };

  message = '';

  constructor(private tutorialService: TutotorialService, 
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    if(!this.viewMode){
      this.message = '';
      this.getTutorial(this.route.snapshot.params['id']);
    }    
  }

  getTutorial(id: any): void{
    this.tutorialService.get(id).subscribe({
      next: (data) => {
        this.currentTutorial = data;
        console.log(data);
      },
      error: (e) => console.log(e)
    });
  }

  updatePublished(status: boolean): void{
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };

    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentTutorial.published = status;
        this.message = res.message ? res.message : 'The status is updated successfully';
      },
      error: (e) => console.log(e)
    });
  }

  updateTutorial(): void{
    this.message = '';
    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial).
    subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message ? res.message : 'The tutorial is updates successfully';
      },
      error: (e) => console.log(e)
    });
  }

  deleteTutorial(): void{
    this.tutorialService.delete(this.currentTutorial.id).
    subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['tutorials']);
      },
      error: (e) => console.log(e)
    });
  }

}
