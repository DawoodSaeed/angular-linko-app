import { Component, HostBinding, Input } from '@angular/core';
import { Article } from './article.modal';

// Component Decorator;
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})


// Component Defination class;
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'article';
  @Input()
  article!: Article;




  // We are applying the law of demeter here;
  // One object should every less of any other object;
  voteUp() {
    this.article.voteUp();

    // If this is applied on an anchor tag
    // return false;
  }

  voteDown() {
    this.article.voteDown();

    // If this is applied on an anchor tag
    // return false; to stop propogation of an event;
  }


}
