import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Subsystems } from 'src/app/shared/enum';
import { SearchState } from 'src/app/shared/interface';

@Component({
  selector: 'app-pull-search',
  templateUrl: './pull-search.component.html',
  styleUrls: ['./pull-search.component.scss']
})
export class PullSearchComponent {

  @Output() searchUpdate = new EventEmitter<SearchState>();

  constructor() { }
  subSystems: Array<string> = Object.values(Subsystems);

  private searchState: SearchState = {
    name: '',
    subsystem: []
  }

  public updateName($event: any): void {
    this.searchState.name = ($event.target.value as string);
    this.notify();
  }

  public updateSubsystems($event: MatSelectChange): void {
    this.searchState.subsystem = ( $event.value as Array<Subsystems> );
    this.notify(); 
  }

  private notify(): void {
    this.searchUpdate.emit(this.searchState);
  }

}
