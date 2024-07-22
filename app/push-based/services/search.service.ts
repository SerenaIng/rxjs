import { Injectable } from '@angular/core';
import { SearchState } from '../../shared/interface';
import { BehaviorSubject, combineLatest, debounceTime, map, Observable } from 'rxjs';
import { Subsystems } from 'src/app/shared/enum';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  private inputState: SearchState = {
    name: '',
    subsystem: []
  }

  private state$: BehaviorSubject<SearchState> = new BehaviorSubject<SearchState>(this.inputState);
  private name$: Observable<string> = this.state$.pipe(
    map(state => state.name),
    debounceTime(250)
  )

  private subsystem$: Observable<Array<Subsystems>> = this.state$.pipe(
    map(state => state.subsystem),
    debounceTime(250)
  )

  public searchUpdate$: Observable<SearchState> = combineLatest([this.name$, this.subsystem$]).pipe(
    map(([ name, subsystem ]) => ({ name, subsystem }) )
  )


  public updateName(nameInput: string): void {
    this.inputState.name = nameInput;
    this.state$.next(this.inputState);
  }

  public updateSubsystems(subsystems: Array<Subsystems>): void {
    this.inputState.subsystem = subsystems;
    this.state$.next(this.inputState);
  }
}
