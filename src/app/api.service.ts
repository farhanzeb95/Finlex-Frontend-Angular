import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const API_URL ='';

@Injectable()
export class ApiService {

  constructor( private httpClient: HttpClient) { }

}
