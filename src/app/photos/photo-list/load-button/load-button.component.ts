import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wp-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  @Input() hasMore: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
