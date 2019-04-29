import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wp-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter:string = '';
  name:string = 'photos';
  
  constructor(private activatedRoute: ActivatedRoute) {}
    
  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }
}
