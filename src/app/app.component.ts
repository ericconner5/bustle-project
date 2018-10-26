import { Component, Input } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentFocus: string = 'bustle article app.component.ts'
  @Input() childArticle: Article[];
};


// this was in the class above
// title: "Bustle AppComponent Title"
// currentFocus: string = 'Bustle Site Article';
// firstArticle = {
//   image: 'image goes here',
//   description: 'description goes here',
//   author: 'by author name'
