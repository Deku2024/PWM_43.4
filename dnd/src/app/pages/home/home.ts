// home.component.ts
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
  loading: boolean = true;
  error: string | null = null;

  constructor(private contentService: ChargeContentService) {}

  ngOnInit() {
    this.loadContent();
  }

  async loadContent() {
    try {
      this.loading = true;
      this.contents = await this.contentService.getHomeContent();
      console.log('Contenido final en componente:', this.contents);
      this.loading = false;
    } catch (error) {
      console.error('Error:', error);
      this.error = 'Error al cargar contenido';
      this.loading = false;
    }
  }
}
