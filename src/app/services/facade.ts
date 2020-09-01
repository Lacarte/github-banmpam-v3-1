
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from './conf/endpoinURL';


export abstract class Facade<T> {

  protected  URL: string = URL;
  abstract resourceName: string;

   constructor(
    protected httpClient: HttpClient,
  ) {}

  public ping() {
    return this.httpClient.get<T>(`${this.URL}/${this.resourceName}`, { observe: 'response' });
  }

  public create(generic: T): Observable<T> {
    return this.httpClient.post<T>(`${this.URL}/${this.resourceName}`, generic);
  }


  public createResponse(generic: T): Observable<HttpResponse<T>> {
    return this.httpClient.post<T>(`${this.URL}/${this.resourceName}`, generic
    , {
      observe: 'response'
    }
    );
  }

  public get(id: string): Observable<T> {
    return this.httpClient.get<T>(`${this.URL}/${this.resourceName}/${id}`);
  }

  public getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.URL}/${this.resourceName}`);
  }

  public getUrl(url: string): Observable<T> {
    return this.httpClient.get<T>(`${url}/`);
  }

  public update(generic: T, id: string): Observable<T> {
    return this.httpClient.put<T>(`${this.URL}/${this.resourceName}/${ id}/`, generic);
  }

  public patch(generic: any, id: string): Observable<T> {
   return this.httpClient.patch<T>(`${this.URL}/${this.resourceName}/${ id}/`, generic);
 }

  public delete(generic: T, id: string): Observable<T> {
    return this.httpClient.patch<T>(`${this.URL}/${this.resourceName}/${ id}/`, {delete: true});
  }

}
