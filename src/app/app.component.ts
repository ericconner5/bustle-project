import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { NavBarComponent} from 'nav-bar.component'; may be needed


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentFocus: string = 'Bustle Site Article';
  firstArticle = {
    image: 'image goes here',
    description: 'description goes here',
    author: 'BY AUTHOR 1'
  };
  // secondArticle = {
  //   image: '',
  //   description: '',
  //   author: 'BY AUTHOR 1'
  // };
  // thridArticle = {
  //   image: '',
  //   description: '',
  //   author: 'BY AUTHOR 1'
  // };
  // forthArticle = {
  //   image: '',
  //   description: '',
  //   author: 'BY AUTHOR 1'
  // };
  // fifthArticle = {
  //   image: '',
  //   description: '',
  //   author: 'BY AUTHOR 1'
  // };
  // sixthArticle = {
  //   image: '',
  //   description: '',
  //   author: 'BY AUTHOR 1'
  // }

}
