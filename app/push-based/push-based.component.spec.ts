import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushBasedComponent } from './push-based.component';

describe('PushBasedComponent', () => {
  let component: PushBasedComponent;
  let fixture: ComponentFixture<PushBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushBasedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
