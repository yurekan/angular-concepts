import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post.service';
import { Post } from '../post';
import { from } from 'rxjs';

import { HighlightDirective } from '../highlight.directive';
import { ReborderDirective } from '../reborder.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-http-client',
  standalone: true,
  imports: [CommonModule, HighlightDirective, ReborderDirective, FormsModule],
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.css'
})
export class HttpClientComponent implements OnInit{

  posts = new Array<Post>();

  constructor(private service: PostService){}

  ngOnInit(){
    this.service.getPosts().subscribe(response => {
      this.posts = (response as Post[]).map(item => {
        return new Post(
          item.body,
          item.id,
          item.title,
          item.userId
        );
      });
    });

    // Same purpose what we have mentioned abovem can be achieved using Obserable also
    const data = from(fetch('https://jsonplaceholder.typicode.com/posts'));
    data.subscribe({
      next(response) {console.log(response);},
      error(err) {console.error('Error', err);},
      complete() {console.log("Completed")}
    });
  }

  isVisible=true;
  color='red'

  title='Data Binding Using Host Listener';
  name = '';
}
