/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaximumPointsComponent } from './maximum-points.component';

describe('MaximumPointsComponent', () => {
  let component: MaximumPointsComponent;
  let fixture: ComponentFixture<MaximumPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaximumPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaximumPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
