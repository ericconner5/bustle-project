import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
  template: `
    <nav class="navbar">

      <div class="navbar-brand">
        <a class="navbar-item-hamburger-icon">
          <img id="hamburger-icon" src="assets/images/hamburger-icon.png">
        </a>
        <a class="navbar-item-bustle-logo">
          <img id="bustle-logo" src="assets/images/bustle-logo.svg">
        </a>
        <a class="navbar-item-facebook-logo">
          <img id="facebook-logo" src="assets/images/facebook-logo.png">
        </a>
        <a class="navbar-item-twitter-logo">
          <img id="twitter-logo" src="assets/images/twitter-logo.png">
        </a>
        <a class="navbar-item-pinterest-logo">
          <img id="pinterest-logo" src="assets/images/pinterest-logo.png">
        </a>
        <a class="navbar-item-instagram-logo">
          <img id="instagram-logo" src="assets/images/instagram-logo.png">
        </a>
        <a class="navbar-item-youtube-logo">
          <img id="youtube-logo" src="assets/images/youtube-logo.png">
        </a>
        <a class="navbar-item-podcast-logo">
          <img id="podcast-logo" src="assets/images/podcast-logo.png">
        </a>
        <a class="navbar-item-search-icon">
          <img id="search-icon" src="assets/images/search-icon.png">
        </a>
        <a class="navbar-item-usa-logo">
          <img id="usa-logo" src="assets/images/usa-logo.png">
        </a>
        <a class="navbar-item-uk-logo">
          <img id="uk-logo" src="assets/images/uk-logo.png">
        </a>
      </div>
    </nav>
  `,
  // styles: []
})
export class NavBarComponent implements OnInit {
  constructor() {
    // public images = [
    //   image: "assets.hamburger-icon.png",
    // ]
   }

  ngOnInit() {
  }

}


// export class HamburgerComponent {
//   hamburgerComponent = {
//     constructor(public description: string) {
//     icon: "placeholder text"
//   }
//   }
// }
