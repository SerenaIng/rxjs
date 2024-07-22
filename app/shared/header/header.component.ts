import { Component, Input } from '@angular/core';
import { Implementation } from '../enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input('implementation') implementation: Implementation;

  constructor() { }

}
