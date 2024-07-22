import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullResultsComponent } from './pull-results.component';

describe('PullResultsComponent', () => {
  let component: PullResultsComponent;
  let fixture: ComponentFixture<PullResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
