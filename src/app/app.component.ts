import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "khkjh"
  name = "eric schwartz";

  changeName(){
    this.name = "bob smith"
  }
}
