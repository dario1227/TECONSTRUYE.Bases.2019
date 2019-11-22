import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { LocationManagementService } from 'src/app/services/location-management.service';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {
  
  constructor(private locationservice:LocationManagementService) { }


  ngOnInit() {
    this.locationservice.getProvincia();
  }
}