import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquirySoloAccountPage } from './inquiry-solo-account.page';

describe('InquirySoloAccountPage', () => {
  let component: InquirySoloAccountPage;
  let fixture: ComponentFixture<InquirySoloAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquirySoloAccountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquirySoloAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
