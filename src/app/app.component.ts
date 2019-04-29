import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Waser Pics';
  photos: Object[] = [];
  
  constructor(http: HttpClient) {
    console.log(http);

    const observable = http.get<Object[]>("http://localhost:3000/flavio/photos");
    observable.subscribe(
        photos => this.photos = photos,
        err => console.log(err.message)
      );
  }
}
