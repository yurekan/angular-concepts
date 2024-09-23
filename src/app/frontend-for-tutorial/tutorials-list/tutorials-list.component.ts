import { Component, Input, OnInit } from '@angular/core';
import { Tutorial } from '../model/tutorial.model';
import { TutotorialService } from '../services/tutorial.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-tutorials-list',
  standalone: true,
  imports: [CommonModule , NgClass, FormsModule],
  templateUrl: './tutorials-list.component.html',
  styleUrl: './tutorials-list.component.css'
})
export class TutorialsListComponent implements OnInit{

  tutorials: Tutorial[] = [];
  @Input() currentTutorial: Tutorial = new Tutorial();
  currentIndex = -1;
  title = '';

  constructor (private tutorialService: TutotorialService){}

  ngOnInit() {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void{
    this.tutorialService.getAll().subscribe({
      next: (data) => {
        this.tutorials = data;
        console.log(data);
      },
      error: (e) => console.log(e)
    })
  }

  refreshList(){
    this.retrieveTutorials();
    this.currentIndex = -1;
    this.currentTutorial = new Tutorial();
  }

  selectActiveTutorial(tutorial: Tutorial, index: number): void{
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void{
    this.tutorialService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.log(e)
    })
  }

  searchByTitle(): void{
    this.currentTutorial = new Tutorial();
    this.currentIndex = -1;
    this.tutorialService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.tutorials = data;
        console.log(data);
      },
      error: (e) => console.log(e)
    }) 
  }
}
