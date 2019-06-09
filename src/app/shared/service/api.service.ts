import { environment } from '../../../environments/environment';
import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class RestService {


  private baseUrl;
  employees = [];

  constructor(private httpClient: HttpClient, private logService: LogService) {
    this.baseUrl = environment.baseUrl;
  }

  get(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/employees`);
  }
  post(param: any, apiUrl: any): Observable<any> {
    return this.httpClient.post<any[]>(this.baseUrl + "/" + apiUrl, param);
  }
  put(param: any, apiUrl: any, empId: any): Observable<any> {
    return this.httpClient.put<any[]>(this.baseUrl + "/" + apiUrl + '/' + empId, param);
  }
  delete(param: any, apiUrl: any) {
    return this.httpClient.delete(`${this.baseUrl}/${apiUrl}/${param}`);
  }
}