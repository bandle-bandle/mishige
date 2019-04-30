import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryContributionPage } from './inquiry-contribution.page';

describe('InquiryContributionPage', () => {
  let component: InquiryContributionPage;
  let fixture: ComponentFixture<InquiryContributionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryContributionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryContributionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
