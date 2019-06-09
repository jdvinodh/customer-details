import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../shared/service/api.service';
import { DataService } from '../shared/service/data-share.service';

@Component({
  selector: 'app-employee-action',
  templateUrl: './employee-action.component.html'
})
export class EmployeeActionComponent implements OnInit {
  addEdit: string;
  addEmployees: any;
  employeeDetails: any
  constructor(private route: ActivatedRoute, private restService: RestService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { // load add customer with a parameter
      this.addEdit = params.get("id")
    });
    this.dataService.currentMessage.subscribe(message => { this.employeeDetails = message })
  }
  AddEditCandidateDetails(employeeDetails, employeeRegForm) { // add or edit an employee
    let addEditEmployees = {

      "name": employeeDetails.employee_name,
      "salary": "300",
      "age": employeeDetails.employee_age
    };
    if (this.addEdit === 'Add') {
      this.restService.post(addEditEmployees, 'create').subscribe(employees => { this.addEmployees = employees; this.router.navigate(['customer']); });
      employeeRegForm.reset()
    }

    else {
      this.restService.put(addEditEmployees, 'update', employeeDetails.id).subscribe(employees => { this.addEmployees = employees; this.router.navigate(['customer']); });
      employeeRegForm.reset()
    }


  }
}
