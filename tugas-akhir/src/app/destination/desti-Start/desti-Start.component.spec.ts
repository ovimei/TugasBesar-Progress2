/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DestiStartComponent } from './desti-Start.component';

describe('DestiStartComponent', () => {
  let component: DestiStartComponent;
  let fixture: ComponentFixture<DestiStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestiStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestiStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
