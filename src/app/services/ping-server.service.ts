import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { Ping } from '../models/ping';
import { Facade } from './facade';

@Injectable({
  providedIn: 'root'
})
export class PingServerService extends Facade<Ping> {
  resourceName = 'pingv1';

  public connected$ = new BehaviorSubject<boolean>(false);
  public connState: boolean;
  private source = interval(10000);
  private isPingEnabled = false;
  constructor(protected httpClient: HttpClient) {
    super(httpClient);

    if (this.isPingEnabled) {
      const subscribe = this.source.subscribe(() => {
        this.ping().subscribe(data => {
          console.log(data);
        });

        // this.ping().pipe(first())
        //   .subscribe(resp => {
        //     if (resp.status === 200) {
        //       this.connected(true);
        //     } else {
        //       this.connected(false);
        //     }
        //   }), err => this.connected(false);
      });
    }
  }

  connected(data: boolean) {
    this.connState = data;
    this.connected$.next(this.connState);
  }
}
