import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Waser Pics';
  photos: Object[] = [];
  
  constructor(photoService: PhotoService) {

    const observable = photoService.listFromUser('flavio');

    observable.subscribe(
      photos => this.photos = photos,
      err => console.log(err.message)
    );
  }
}
