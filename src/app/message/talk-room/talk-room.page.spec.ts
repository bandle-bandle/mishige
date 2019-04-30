import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkRoomPage } from './talk-room.page';

describe('TalkRoomPage', () => {
  let component: TalkRoomPage;
  let fixture: ComponentFixture<TalkRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkRoomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
