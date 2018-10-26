import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.model';
// import { articles } from '../mock-articles.json';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  // @Input() childArticle: Article[];
  articles: Article[] = [
    new Article ('Image link here', 'description goes here', 'author goes here'),
    new Article ('Image link here', 'description goes here', 'author goes here'),
    new Article ('Image link here', 'description goes here', 'author goes here'),
    new Article ('Image link here', 'description goes here', 'author goes here'),
    new Article ('Image link here', 'description goes here', 'author goes here')
  ]

  constructor() { }

  ngOnInit() {
  }

}


// { "articles": [{
//   articleImage: "Image here",
//   articleDescription: "Description here",
//   articleAuthor: "Author here"
//   }, {
//     articleImage: "Image here again",
//     articleDescription: "Description here again",
//     articleAuthor: "Author here again"
//   }]
// }
