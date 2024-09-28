import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-display-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-profile.component.html',
  styleUrl: './display-profile.component.css'
})
export class DisplayProfileComponent {
  profile: ProfileDetails = {
    name: 'John Doe',
    age: 28,
    occupation: 'Chef',
    winningYear: 15,
    profilePicture: 'https://example.com/john-doe-profile.jpg',
    watchSessionLink: 'https://example.com/bigboss-season15'
}
}
interface ProfileDetails {
  name: string;
  age: number;
  occupation: string;
  winningYear: number;
  profilePicture: string;
  watchSessionLink: string;
}


