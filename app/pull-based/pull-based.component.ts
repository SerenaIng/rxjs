import { Component, ViewChild } from '@angular/core';
import { SearchState } from 'src/app/shared/interface';
import { PullResultsComponent } from './pull-results/pull-results.component';

@Component({
  selector: 'app-pull-based',
  templateUrl: './pull-based.component.html',
  styleUrls: ['./pull-based.component.scss']
})
export class PullBasedComponent {

  @ViewChild(PullResultsComponent) resultsComp: PullResultsComponent;

  constructor() { }

  handleSearchParamsUpdate($event: SearchState): void {
    this.resultsComp.getData($event);
  }

}
