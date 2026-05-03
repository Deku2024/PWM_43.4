// home.component.ts
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
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
  contents : WritableSignal<Content[]> = signal<Content[]>([]);
  loading: boolean = true;
  error: string | null = null;

  constructor(private contentService: ChargeContentService) {}

  ngOnInit() {
    this.loadContent();
  }

  async loadContent() {
    try {
      this.loading = true;
      this.contents.set(await this.contentService.getHomeContent());
      this.loading = false;
    } catch (error) {
      console.error('Error:', error);
      this.error = 'Error al cargar contenido';
      this.loading = false;
    }
  }
}
