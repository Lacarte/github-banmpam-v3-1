import { Injectable } from '@angular/core';
import { Pais } from '../models/pais';
import { Facade } from './facade';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService  extends  Facade<Pais> {
  resourceName = 'pais';

  constructor(
    protected httpClient: HttpClient
  ) { super(httpClient);
  }
}
