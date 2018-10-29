import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from './models/article.model';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  articles: FirebaseListObservable<any[]>;

  // title = "Bustle"
  // articles: Article[] = [
  //   new Article('Image', 'Description', 'Author')
  // ]
  @Input() childArticle: Article[];
};


// this was in the class above
// title: "Bustle AppComponent Title"
// currentFocus: string = 'Bustle Site Article';
// firstArticle = {
//   image: 'image goes here',
//   description: 'description goes here',
//   author: 'by author name'
