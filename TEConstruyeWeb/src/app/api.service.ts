import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get('http://localhost:3000/api/vistaConstruccion/clientes');
  }
  getEmpleados() {
    return this.http.get('http://localhost:3000/api/vistaConstruccion/empleados');
  }
  getProfesionales() {
    return this.http.get('http://localhost:3000/api/vistaConstruccion/profesionales');
  }
  getMateriales() {
    return this.http.get('http://localhost:3000/api/vistaConstruccion/materiales');
  }
  getEtapas() {
    return this.http.get('http://localhost:3000/api/vistaConstruccion/nombreEtapa');
  }
  getProyectos() {
    return this.http.get('http://localhost:3000/api/vistaConstruccion/proyectos');
  }
  getCompras() {
    return this.http.get('http://localhost:3000/api/vistaConstruccion/reporteGastos');
  }
  getReportajePresupuesto() {
    return this.http.get('http://localhost:3000/api/vistaConstruccion/reportePresupuesto');
  }
  getTieneEtapas(){
    return this.http.get('http://localhost:3000/api/vistaConstruccion/tieneEtapas');
  }
  getEstado(id){
    return this.http.get('http://localhost:3000/api/vistaConstruccion/reporteEstado/' + id);
  }





  postProfesional(json){
    return this.http.post('http://localhost:3000/api/vistaConstruccion/registrar/Profesional', json);
  }
  postClientes(json){
    return this.http.post('http://localhost:3000/api/vistaConstruccion/registrar/Clientes', json);
  }
  postEmpleados(json){
    return this.http.post('http://localhost:3000/api/vistaConstruccion/registrar/Empleados', json);
  }
  postMateriales(json){
    return this.http.post('http://localhost:3000/api/vistaConstruccion/registrar/Materiales', json);
  }
  postEtapas(json){
    return this.http.post('http://localhost:3000/api/vistaConstruccion/registrar/Etapas', json);
  }
  postObras(json){
    return this.http.post('http://localhost:3000/api/vistaConstruccion/registrar/Obras', json);
  }
  postPropiedadTECres(json){
    return this.http.post('http://localhost:4000/api/vistaCliente/propiedad', json);
  }

  getUbicacionId(provincia: string , canton: string , distrito: string) {
    return this.http.get('http://localhost:4000/api/vistaGeneral/ubicaciones?'
     + 'provincia=' + provincia + '&canton=' + canton + '&distrito=' + distrito);
  }

}

