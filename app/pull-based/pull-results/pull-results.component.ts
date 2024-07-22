import { Component } from '@angular/core';
import { SearchParams, ServerResponse } from '../../shared/interface';
import { DataRequestorService } from '../../shared/data-requestor.service';

@Component({
  selector: 'app-pull-results',
  templateUrl: './pull-results.component.html',
  styleUrls: ['./pull-results.component.scss']
})
export class PullResultsComponent{

  constructor(private dataRequestor: DataRequestorService) { }

  public displayedColumns: Array<string> = ['name', 'subsystem', 'timeline'];
  public dataSource: any;

  getData(searchParams: SearchParams): void {
    this.dataRequestor.getData(searchParams).subscribe((data: ServerResponse) => {
      if(data?.response) {
        this.dataSource = data.response;
      }
    });
  }
}
