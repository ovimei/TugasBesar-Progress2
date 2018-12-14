/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DestiItemComponent } from './desti-item.component';

describe('DestiItemComponent', () => {
  let component: DestiItemComponent;
  let fixture: ComponentFixture<DestiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
