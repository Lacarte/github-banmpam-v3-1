import { Injectable } from '@angular/core';
import { DocType } from '../models/doc_type';
import { Facade } from './facade';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocTypeService  extends  Facade<DocType> {
  resourceName = 'doctype';

  constructor(
    protected httpClient: HttpClient
  ) { super(httpClient);
  }
}


