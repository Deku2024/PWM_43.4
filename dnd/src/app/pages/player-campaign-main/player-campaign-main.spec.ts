import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCampaignMain } from './player-campaign-main';

describe('PlayerCampaignMain', () => {
  let component: PlayerCampaignMain;
  let fixture: ComponentFixture<PlayerCampaignMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerCampaignMain],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerCampaignMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
