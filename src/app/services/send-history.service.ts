import { Injectable } from '@angular/core';
import { Facade } from './facade';
import { HttpClient } from '@angular/common/http';
import { SendHistory } from '../models/Isend-history';

@Injectable({
  providedIn: 'root'
})
export class SendHistoryService extends  Facade<SendHistory> {
  resourceName = 'sendhistory';


  constructor(
    protected httpClient: HttpClient
  ) { super(httpClient);
  }
}
