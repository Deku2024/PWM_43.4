import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedSession } from './created-session';

describe('CreatedSession', () => {
  let component: CreatedSession;
  let fixture: ComponentFixture<CreatedSession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedSession],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatedSession);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
