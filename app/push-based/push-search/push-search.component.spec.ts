import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushSearchComponent } from './push-search.component';

describe('PushSearchComponent', () => {
  let component: PushSearchComponent;
  let fixture: ComponentFixture<PushSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
