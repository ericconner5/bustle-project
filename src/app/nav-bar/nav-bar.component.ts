import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { routing } from '../app.routing';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
  // template:
  // styles: []
})
export class NavBarComponent implements OnInit {
  currentRoute: string = this.router.url;

  constructor(private router: Router) { }
    // public images = [
    //   image: "assets.hamburger-icon.png",
    // ]
   

  ngOnInit() {
  }

}
