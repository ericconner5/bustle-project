import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [
    new Article ('image', 'description', 'author')
  ]

  constructor() { }

  ngOnInit() {
  }

}
