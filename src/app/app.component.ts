import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Toolbar Example';
  n = 0;

  onButtonToggled(n: Number) {
    console.log('Button ' + n + ' was toggled');
  }
}
