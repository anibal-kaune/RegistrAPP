import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosRegionalesService } from './datos-regionales.service';

@Injectable({
  providedIn: 'root'
})
export class DatosComunalesService {
  private apiUrlComuna= 'https://dev.matiivilla.cl/duoc/location/comuna/7';
  obtenerRegiones: any;

  constructor(private http: HttpClient) { }

    obtenerComunas():Observable<any>{
      return this.http.get<any>(this.apiUrlComuna);
    }
}
