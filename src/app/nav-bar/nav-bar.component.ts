import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
  // template:
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


// <script type="text/javascript">
// var app = angular.module('FormApp', [])
// app.controller('myController', function ($scope) {
//   $scope.ShowDown = true;
//   $scope.ShowUp = false;
//
//   $scope.ShowHide = function () {
//     $scope.ShowDown = $scope.ShowDown ? false : true;
//     $scope.ShowUp = $scope.ShowUp ? false : true;
//   }
// });
// </script>
