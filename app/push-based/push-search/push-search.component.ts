import { Component, OnDestroy } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Subsystems } from 'src/app/shared/enum';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-push-search',
  templateUrl: './push-search.component.html',
  styleUrls: ['./push-search.component.scss']
})
export class PushSearchComponent implements OnDestroy {

  constructor(private searchSvc: SearchService) { }

  subSystems: Array<string> = Object.values(Subsystems);

  public updateName($event: any): void {
    this.searchSvc.updateName(($event.target.value as string));
  }

  public updateSubsystems($event: MatSelectChange): void {
    this.searchSvc.updateSubsystems(( $event.value as Array<Subsystems> ));
  }

  private clearFields(): void {
    this.searchSvc.updateName('');
    this.searchSvc.updateSubsystems([]);
  }

  ngOnDestroy(): void {
    this.clearFields();
  }
}
