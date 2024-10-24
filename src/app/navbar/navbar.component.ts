import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  name="YOUTUBE";
  logo={
    src:"https://cdn.pixabay.com/photo/2023/01/23/05/21/youtube-7737850_1280.png",
    alt:"youtube logo"
  }
}
