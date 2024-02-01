import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { NgFor } from '@angular/common';
import { Article } from './article/article.modal';
// Component Decorator;
@Component({
  selector: 'app-root',
  imports: [ArticleComponent, NgFor],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


// Component Definition;
export class AppComponent {


  // Article List
  articles: Article[];


  constructor() {
    this.articles = [
      
    ]
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title : ${title.value} & article link: ${link.value}`);


    this.articles.push(
      new Article(title.value, link.value)
    )
    return false;
  }
}
