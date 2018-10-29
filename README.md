# Bustle Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

# By Eric Conner

## Project Plans

An Angular project site clone of https://www.bustle.com<br>
This build will demonstrate basic understanding of setting up an Angular project, some styling practice and working components that divide individual aspects of the site into modules.
<br>

Components to build:
<ul>
  top menu bar<br>
  <ul>
    hamburger icon<br>
    logo icon<br>
    social media icons/links<br>
    search icon<br>
    US/UK toggle icons<br><br>
  </ul>
  carousel scrolling articles<br>
  <ul>
    various articles/links<br><br>
  </ul>
  headline/hero article<br>
  <ul>
    hero article/links<br><br>
  </ul>
  scrolling exclusives<br>
  <ul>
    bustle exclusives articles/links<br><br>
  </ul>
  centered main column articles<br>
  <ul>
    centered main column articles/links
  </ul>
</ul>

## Setup on OSX
<ul>
Clone Bustle Project Repo
Install npm dependencies by running `npm install` command in terminal
Open index.html in a web browser (Chrome Preferred)
Set up the firebase configs by adding this file: `/src/app/api-keys.ts`
It will need to contain everything inside the script tags from firebase in your dashboard
see below:
`export const masterFirebaseConfig = {
  apiKey: "XXXXX",
  authDomain: "XXXXX.firebaseapp.com",
  databaseURL: "https://XXXXX.firebaseio.com",
  projectId: "XXXXX",
  storageBucket: "XXXXX.appspot.com",
  messagingSenderId: "XXXXX"
};`
You will need to obtain a firebase key and other credentials and fill this in with those values.
</ul>

## Development server

Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run ng test to execute the unit tests via Karma.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Technologies Used
<ul>
JavaScript
Node.js
jQuery 3.3.1
Bootstrap 4.1.3
Babel
Webpack
ESLint
Jasmine
Karma
</ul>

## Links

Any time, day or night, for any reason, question, answer or concern, contact me here: theluvq@gmail.com

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

This software is licensed under the MIT license.

Copyright (c) 2018 Eric Conner
