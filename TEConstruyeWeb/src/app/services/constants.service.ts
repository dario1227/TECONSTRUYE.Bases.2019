import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  readonly routeURL = "http://localhost:4800/api"

  constructor() { }
}
