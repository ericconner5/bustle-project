import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.model';
import { ARTICLES } from '../../../mock-articles';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  // @Input() childArticle: Article[];
  articles: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
  this.articles = database.list('albums');
  }

  ngOnInit() {
  }

  getAlbums(){
  return this.articles;
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
