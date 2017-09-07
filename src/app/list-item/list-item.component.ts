import { Component, OnInit, Input } from '@angular/core';
import { Office } from '../office';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() fetchedOffice: Office;
  // title: string = 'Title';
  // description: string = 'This is a description';
  constructor() { }

  ngOnInit() {
  }
}
