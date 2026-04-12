import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-log-in',
  imports: [Header, Footer],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css',
})
export class LogIn {}
