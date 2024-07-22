import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushResultsComponent } from './push-results.component';

describe('PushResultsComponent', () => {
  let component: PushResultsComponent;
  let fixture: ComponentFixture<PushResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
