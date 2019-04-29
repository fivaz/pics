import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

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
