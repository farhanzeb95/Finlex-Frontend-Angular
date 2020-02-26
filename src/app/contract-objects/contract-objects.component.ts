import { ApiService } from '../services/api.service';
import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material';

@Component({
  selector: 'app-contract-objects',
  templateUrl: './contract-objects.component.html',
  styleUrls: ['./contract-objects.component.css']
})
export class ContractObjectsComponent implements OnInit {

data: any;
  constructor(private apiService: ApiService) {
   }

  ngOnInit() {
    this.showData();

  }

  showData(){
    this.apiService.getData()
      .subscribe( data => {
        this.data = data;
        console.log(data);

      });
  }

}
