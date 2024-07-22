import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullSearchComponent } from './pull-search.component';

describe('PullSearchComponent', () => {
  let component: PullSearchComponent;
  let fixture: ComponentFixture<PullSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
