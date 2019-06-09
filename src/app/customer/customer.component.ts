import { Component, OnInit } from '@angular/core';
import { RestService } from '../shared/service/api.service';
import { LogService } from '../shared/service/log.service';
import { DataService } from '../shared/service/data-share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
  employees: any[];
  cardView: boolean;
  tableView: boolean;
  deleteEmployees: any;

  headElements = ['Employee Id', 'Employee Name', 'Employee Age', 'Details', 'Action'];
  constructor(private restService: RestService, private logService: LogService, private dataService: DataService, private router: Router) { }

  ngOnInit() { // load datas on page load
    this.getEmployees();
    this.cardView = true
  }
  getEmployees() { // get data
    this.restService.get()
      .subscribe(employees => this.employees = employees);
  }
  showCardView() { // show card view on the template
    this.cardView = true;
    this.tableView = false;
  }
  showListView() { // show table view on the template
    this.cardView = false;
    this.tableView = true;
  }
  viewEditDetails(employee) { // pass data to another component to show the full details
    this.dataService.updateEmployee(employee);
    this.router.navigate(['customerDetail']);
  }
  editEmployee(employee) {
    this.dataService.updateEmployee(employee);
    this.router.navigate(['addEdit', 'Edit']);
  }
  deleteEmployee(id) { // delete an employee
    this.restService.delete(id, 'delete').subscribe(employees => { this.deleteEmployees = employees; this.getEmployees() });

  }
}
