import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: "Bustle AppComponent Title"
  currentFocus: string = 'Bustle Site Article';
  firstArticle = {
    image: 'image goes here',
    description: 'description goes here',
    author: 'by author name'
  };
}
