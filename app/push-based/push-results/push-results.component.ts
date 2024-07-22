import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';
import { DataRequestorService } from '../../shared/data-requestor.service';
import { first, Observable, tap, map, flatMap, switchMap, mergeMap } from 'rxjs';
import { SearchResult, SearchState, ServerResponse } from 'src/app/shared/interface';
import { SearchParams } from '../../shared/interface';

@Component({
  selector: 'app-push-results',
  templateUrl: './push-results.component.html',
  styleUrls: ['./push-results.component.scss']
})
export class PushResultsComponent {

  constructor(private searchSvc: SearchService, private dataRequestor: DataRequestorService) { }

  public searchParamsUpdate$: Observable<Array<SearchResult>> = this.searchSvc.searchUpdate$.pipe(
    mergeMap(value => this.getData(value)),
    map( value => value.response )
  )

  public displayedColumns: Array<string> = ['name', 'subsystem', 'timeline'];

  public getData(searchParams: SearchParams): Observable<ServerResponse> {
    return this.dataRequestor.getData(searchParams);
  }
}