import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';



@Injectable()
export class ApiService {
  API_URL ='https://localhost:44378/contract/object';
  constructor( private httpClient: HttpClient) { }

  public getData(){
    return this.httpClient.get(this.API_URL);
  }


}
