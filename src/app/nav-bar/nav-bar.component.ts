import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
  template: `
    <nav class="navbar">

      <div class="navbar-brand">
        <a class="navbar-item">
          <img id="hamburger" src="assets/images/hamburger-icon.png">
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
