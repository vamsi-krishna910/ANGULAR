import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  image={
    src:"https://cdn.pixabay.com/photo/2022/01/21/00/38/youtube-icon-6953528_1280.jpg",
    alt:"youtube logo",
    height:"500px",
    
  };
  img1={
    src:"https://cdn.pixabay.com/photo/2021/05/19/17/27/youtube-6266709_1280.jpg",
    alt:"youtube logo",
    
  };
  img2={
    src:"https://cdn.pixabay.com/photo/2022/01/21/00/38/youtube-icon-6953529_1280.jpg",
    alt:"youtube logo",
    
  };
  img3={
    src:"https://cdn.pixabay.com/photo/2022/01/21/00/38/youtube-icon-6953529_1280.jpg",
    alt:"youtube logo"
  }

}
