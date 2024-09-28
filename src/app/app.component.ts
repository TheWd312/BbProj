import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayProfileComponent } from '../common/display-profile/display-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BbShow';
}
  