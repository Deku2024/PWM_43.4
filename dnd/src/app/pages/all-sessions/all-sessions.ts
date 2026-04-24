import { Component } from '@angular/core';
import { HeaderLoggedIn } from '../../components/header-logged-in/header-logged-in';
import { NavBarComponent } from '../../components/nav-bar-component/nav-bar-component';

@Component({
  selector: 'app-all-sessions',
  imports: [HeaderLoggedIn, NavBarComponent],
  templateUrl: './all-sessions.html',
  styleUrl: './all-sessions.css',
})
export class AllSessions {}
