import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignmentstages',
  templateUrl: './assignmentstages.component.html',
  styleUrls: ['./assignmentstages.component.css']
})
export class AssignmentstagesComponent implements OnInit {

  etapasForm: FormGroup; // Formulario de Angular

  @Input() selectedProjectId; // Identificador del proyecto seleccionado
  etapasNombres; // Nombres de etapas
  etapasProyecto; // Etapas del proyecto seleccionado
  
  constructor() { }

  ngOnInit() {
  }

}
