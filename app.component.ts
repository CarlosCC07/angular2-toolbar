import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Toolbar Example';

  buttonToggle: boolean;

  button_action() {
    this.buttonToggle = !this.buttonToggle;

    if (this.buttonToggle) {
      alert('Button State Change = Disabled');
    } else {
      alert('Button State Change = Enabled');
    }
  }

  toggle(e) {
    this.button_action();
  }
}
