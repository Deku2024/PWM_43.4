import { Component } from '@angular/core';
import { HeaderLoggedIn } from '../../components/header-logged-in/header-logged-in';

@Component({
  selector: 'app-profile-settings',
  imports: [HeaderLoggedIn],
  templateUrl: './profile-settings.html',
  styleUrl: './profile-settings.css',
})
export class ProfileSettings {}
