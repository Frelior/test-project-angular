import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { ProfileService } from './data/services/profile.service';
import { LoginPageComponent } from './static/login-page/login-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCardComponent, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  profileService = inject(ProfileService);
  profiles: any = [];

  // profiles = [
  //   { name: 'John Doe', age: 30 },
  //   { name: 'Jane Doe', age: 25 },
  // ];

  constructor() {
    this.profileService.getTestAccounts().subscribe((data) => {
      this.profiles = data;
    });
  }
}
