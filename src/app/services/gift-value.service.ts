import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GiftValue } from '../models/gift_value';
import { Facade } from './facade';

@Injectable({
  providedIn: 'root'
})
export class GiftValueService  extends Facade<GiftValue> {

  resourceName  = 'giftvalue';

  constructor(
    protected httpClient: HttpClient
  ) { super(httpClient);
  }


}
