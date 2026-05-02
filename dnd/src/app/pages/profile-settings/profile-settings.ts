import { Component, input, InputSignal,  } from '@angular/core';
import { HeaderLoggedIn } from '../../components/header-logged-in/header-logged-in';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-settings',
  imports: [HeaderLoggedIn],
  templateUrl: './profile-settings.html',
  styleUrl: './profile-settings.css',
})
export class ProfileSettings {
}
