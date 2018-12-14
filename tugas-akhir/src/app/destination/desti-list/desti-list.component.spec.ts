/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DestiListComponent } from './desti-list.component';

describe('DestiListComponent', () => {
  let component: DestiListComponent;
  let fixture: ComponentFixture<DestiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
