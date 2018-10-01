import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kyle Lamkin';

  homeActive = true;
  aboutActive = false;

  setHomeActive() {
    homeActive = true;
    aboutActive = false;
    https://stackoverflow.com/questions/39507346/how-to-change-the-css-class-name-dynamically-in-angular-2
  }
}
