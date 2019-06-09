import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data-share.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html'
})
export class CustomerDetailsComponent implements OnInit {
  employeeDetails: any;
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    // get data from customer component
    this.dataService.currentMessage.subscribe(message => { this.employeeDetails = message })
  }
}
