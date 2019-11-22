import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';

//declare var require: any;

//import {ApiService} from '../api.service';

@Component({
  selector: 'app-registermaterial',
  templateUrl: './registermaterial.component.html',
  styleUrls: ['./registermaterial.component.css']
})

export class RegistermaterialComponent implements OnInit {

  show;
  materials;
  counter = 4;

  //constructor(private http: ApiService) { }

    currency(money: number) {

      // Create our number formatter.
    const formatter = new Intl.NumberFormat('es-CR', {
      style: 'currency',
      currency: 'CRC',
    });

    return formatter.format(money); /* $2,500.00 */

   }

   ngOnInit() {
     this.show = 'home';
     /* COLOCAR GET REQUEST ACÁ */
     /* EJEMPLO:
    this.http.get<any>('<PEGUE EL LINK>').subscribe(data => {
      this.profesionales = data;
    }
    */
    /* PROVISIONALMENTE SE UTILIZA LO SIGUIENTE */

    /*this.http.getMateriales().subscribe((data)=>{
      this.materials = data;
      console.log(data);
    }, (error) => {
      console.log(error);
    }); */
  }

  /* COLOCAR PUSH REQUEST ACÁ */
  /* PROVISIONALMENTE SE UTILIZA LO SIGUIENTE */
  submit(name: string, price: number) {

    /* this.http.postMateriales({
      nombre: name,
      codigo: this.counter,
      preciounitario: price
    }).subscribe((data)=>{
      if(data==='Error interno del servidor'){
        alert('No se pudo registrar el material:' + data);
        
      }
      console.log(data);
      this.ngOnInit();
    }, (error) => {
      console.log(error);

    });

    const resultadoPost = true;

    if (resultadoPost) {
      this.show = 'home';
      this.counter++;
    } else {
      alert('Error');
    } */

  }

  /* COLOCAR VALIDACIÓN DE ERRORES ACÁ */
  /* PROVISIONALMENTE SE UTILIZA LOS SIGUIENTES 2 MÉTODOS */
  // Busca un empleado por id
  getMaterial(nombre: string) {
    return this.materials.find(x => x.Nombre === nombre);
  }

  // Verifica si existe un empleado con un id
  keyConstraint(nombre: string) {
    return this.getMaterial(nombre) !== undefined;
  }

}