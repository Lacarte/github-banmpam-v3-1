import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocType } from '../models/doc_type';
import { Facade } from './facade';

@Injectable({
  providedIn: 'root'
})
// TODO  change DocType
export class DeliverGiftService extends  Facade<any> {
  resourceName = 'delivergift';

  constructor(
    protected httpClient: HttpClient
  ) { super(httpClient);
  }
}

