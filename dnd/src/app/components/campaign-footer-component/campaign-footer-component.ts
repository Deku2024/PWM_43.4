import { Component, output } from '@angular/core';

@Component({
  selector: 'campaign-footer-component',
  imports: [],
  templateUrl: './campaign-footer-component.html',
  styleUrl: './campaign-footer-component.css',
})
export class CampaignFooterComponent {
  diceClicked = output<boolean>();
  usersClicked = output<boolean>();
  arrowClicked = output<boolean>();
}
