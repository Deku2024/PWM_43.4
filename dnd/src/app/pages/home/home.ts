import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { ChargeContentService } from '../../services/charge-content.service';
import { Content } from '../../models/content';

@Component({
  selector: 'app-home',
  imports: [Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  contents: Content[] = [];

  constructor(private contentService: ChargeContentService) {}

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.contentService.getHomeContent().subscribe((contents) => {
      this.contents = contents;
      console.log(this.contents);
    });
  }
}
