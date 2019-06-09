import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private employeeSource = new BehaviorSubject<any>({});
  currentMessage = this.employeeSource.asObservable();
  courseIdState: any;
  storedProp: any;
  itemValue = new Subject();
  constructor() { }
  updateEmployee(employee: any) {
    this.employeeSource.next(employee);
    localStorage.setItem('test1', JSON.stringify(employee));

  }
  getProperty() {
    return JSON.parse(localStorage.getItem('test1'));
  }
}  
