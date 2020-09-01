import { Injectable } from '@angular/core';
import { GiftView } from '../models/gift_view';
import { HttpClient } from '@angular/common/http';
import { Facade } from './facade';

@Injectable({
  providedIn: 'root'
})
export class GiftViewService extends Facade<GiftView> {

  resourceName  = 'gift/findbyreference';

  constructor(
    protected httpClient: HttpClient
  ) { super(httpClient);
  }


}
