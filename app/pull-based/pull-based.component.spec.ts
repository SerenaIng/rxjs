import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullBasedComponent } from './pull-based.component';

describe('PullBasedComponent', () => {
  let component: PullBasedComponent;
  let fixture: ComponentFixture<PullBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullBasedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
