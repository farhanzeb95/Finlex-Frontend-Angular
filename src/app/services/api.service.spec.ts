import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { ApiService } from '../services/api.service';


describe('ApiService', () => {
      let apiService: ApiService;
      beforeEach(() => {
          TestBed.configureTestingModule({
            imports:[
              HttpClientTestingModule
                        ],
            providers: [
              ApiService
            ]
          }).compileComponents();
      });

      it('should hit the api endpoint', inject([HttpTestingController, ApiService],
        (httpMock: HttpTestingController, ApiService) => {
          expect(apiService).toBeTruthy();
        }
      )
    );

});
