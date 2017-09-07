import { Component, OnInit } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { Office } from '../office';
import { OfficesService } from '../offices.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css'],
  providers: [OfficesService]
})
export class ListContainerComponent implements OnInit {

  offices: Office[] = [];
  constructor(private officesService: OfficesService) { }

  ngOnInit() {
    this.offices = this.officesService.offices;
    this.officesService.getOffices().subscribe((offs) => {
      console.log(offs);
      this.offices = offs
    });
  }

  onChange(newOffices: Office[]) {
    this.offices = newOffices;
  }

}
