import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Waser Pics';
  photos: Photo[] = [];
  
  constructor(private photoService: PhotoService) {}
    
  ngOnInit(): void {
    const observable = this.photoService.listFromUser('flavio');  
    
    observable.subscribe(
      photos => 
      this.photos = photos,
      err => console.log(err.message)
    );
  }
}