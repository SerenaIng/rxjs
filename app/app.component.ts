import { Component } from '@angular/core';
import { Implementation } from './shared/enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selections: Array<string> = Object.values(Implementation);
  selection: Implementation = Implementation.PULL_BASED;

}
