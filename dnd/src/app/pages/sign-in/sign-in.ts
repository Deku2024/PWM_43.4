import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-sign-in',
  imports: [Header, Footer],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {}
