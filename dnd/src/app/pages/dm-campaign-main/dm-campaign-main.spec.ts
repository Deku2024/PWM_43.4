import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmCampaignMain } from './dm-campaign-main';

describe('DmCampaignMain', () => {
  let component: DmCampaignMain;
  let fixture: ComponentFixture<DmCampaignMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DmCampaignMain],
    }).compileComponents();

    fixture = TestBed.createComponent(DmCampaignMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
