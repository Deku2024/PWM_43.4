import { Component, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

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
