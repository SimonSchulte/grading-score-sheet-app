/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WirtschaftsgymnasiumComponent } from './wirtschaftsgymnasium.component';

describe('WirtschaftsgymnasiumComponent', () => {
  let component: WirtschaftsgymnasiumComponent;
  let fixture: ComponentFixture<WirtschaftsgymnasiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WirtschaftsgymnasiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WirtschaftsgymnasiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
