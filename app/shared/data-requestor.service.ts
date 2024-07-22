import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchParams } from './interface';

@Injectable({
  providedIn: 'root'
})
export class DataRequestorService {

  private LOCAL_HOST_URL: string = 'http://localhost'
  private WEB_SERVER_PORT: number = 3000;
  private SEARCH_ROUTE: string = 'search'

  constructor(private httpClient: HttpClient) { }

  getData(searchParams: SearchParams): Observable<any> {
    return this.httpClient.post(`${this.LOCAL_HOST_URL}:${this.WEB_SERVER_PORT}/${this.SEARCH_ROUTE}`, searchParams )
  }
}
