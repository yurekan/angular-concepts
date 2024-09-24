import { Component, Input, OnInit } from '@angular/core';
import { Tutorial } from '../model/tutorial.model';
import { Comment } from '../model/comment.model';
import { TutotorialService } from '../services/tutorial.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tag } from '../model/tag.model';
import { CommentService } from '../services/comment.service';
import { TagService } from '../services/tag.service';

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
    id: 0,
    title: '',
    description: '',
    published: false
  };

  @Input() comments: Comment[] = [];
  @Input() tags: Tag[] = [];

  message = '';

  constructor(private tutorialService: TutotorialService,
    private commentService: CommentService,
    private tagService: TagService,
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
        this.getComment(this.currentTutorial);
        this.getTag(this.currentTutorial);
        console.log(data);
      },
      error: (e) => console.log(e)
    });
  }

  getComment(currentTutorial: Tutorial): void{
    this.commentService.getAllCommentsForTutorial(currentTutorial.id).subscribe({
      next: (value) => {
        console.log("Comments in tutorials-list", value);
        this.comments = value;
      },
      error: (e) => console.log(e)
    });
  }

  getTag(currentTutorial: Tutorial): void{
    this.tagService.getAllTags(currentTutorial.id).subscribe({
      next: (value) => {
        console.log("Tags in tutorials-list", value);
        this.tags = value;
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

    setTimeout(() => {
      this.router.navigate([`/tutorials`]);
    }, 1000); // after 1 second, after we click on update tutorial button, page will automatically
    // redirect to tutorials page for us to verify our changes
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

    setTimeout(() => {
      this.router.navigate([`/tutorials`]);
    }, 1000); //after 1 second we click on delete tutorial button, page will automatically
    // redirect to tutorials page for us to verify our changes.
  }

}
