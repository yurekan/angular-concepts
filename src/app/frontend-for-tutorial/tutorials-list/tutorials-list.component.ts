import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Tutorial } from '../model/tutorial.model';
import { Comment } from '../model/comment.model';
import { TutotorialService } from '../services/tutorial.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { TutorialsDetailsComponent } from '../tutorials-details/tutorials-details.component';
import { CommentService } from '../services/comment.service';
import { Tag } from '../model/tag.model';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-tutorials-list',
  standalone: true,
  imports: [CommonModule , NgClass, FormsModule, TutorialsDetailsComponent],
  templateUrl: './tutorials-list.component.html',
  styleUrl: './tutorials-list.component.css'
})
export class TutorialsListComponent implements OnInit{

  tutorials: Tutorial[] = [];
  @Input() comments: Comment[] = [];
  @Input() tags: Tag[] = [];
  @Input() currentTutorial: Tutorial = new Tutorial();
  currentIndex = -1;
  title = '';

  @ViewChild(TutorialsDetailsComponent)
  tutorialsDetailsComponent!:TutorialsDetailsComponent
  

  constructor (private tutorialService: TutotorialService, 
    private commentService: CommentService,
  private tagService: TagService){}

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
    console.log(this.currentTutorial.id);
    this.tutorialsDetailsComponent.getComment(this.currentTutorial);
    this.tutorialsDetailsComponent.getTag(this.currentTutorial);
    
    // this.commentService.getAllCommentsForTutorial(this.currentTutorial.id).subscribe({
    //   next: (value) => {
    //     console.log("Comments in tutorials-list", value);
    //     this.comments = value;
    //   },
    //   error: (e) => console.log(e)
    // });

    // this.tagService.getAllTags(this.currentTutorial.id).subscribe({
    //   next: (value) => {
    //     console.log("Tags in tutorials-list", value);
    //     this.tags = value;
    //   },
    //   error: (e) => console.log(e)
    // });
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
