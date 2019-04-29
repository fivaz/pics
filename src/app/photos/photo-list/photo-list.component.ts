import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'wp-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  
  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  userName: string = '';
  currentPage: number = 1;
  hasMore: boolean = true;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PhotoService) {}
  
  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
    const observable = this.debounce.pipe(debounceTime(300));
    observable.subscribe(filter => this.filter = filter);
  }
  
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load(){
    const observable = 
      this.service.listFromUserPaginated(this.userName, ++this.currentPage);
    observable.subscribe(newPhotos => {
      this.photos = this.photos.concat(newPhotos);
      if(!newPhotos.length) this.hasMore = false;
    });  
  }
}
