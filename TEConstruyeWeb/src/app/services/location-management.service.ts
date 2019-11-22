import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class LocationManagementService {

  provinciaList : string[];
  cantonList : string[];
  distritoList : string[];
  locationList: Location[];


  constructor(private http : HttpClient, private constant: ConstantsService) { }


  getProvincia(){
    this.http.get(this.constant.routeURL + '/location/province').toPromise().then(res => this.provinciaList = res as string[]);
  }

}
