import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material';

@Component({
  selector: 'app-contract-objects',
  templateUrl: './contract-objects.component.html',
  styleUrls: ['./contract-objects.component.css']
})
export class ContractObjectsComponent implements OnInit {
  customerName: string;
  customerAddress: string;
  totalPrice: string;
  brokerName: string;
  brokerAddress: string;
  contractStartDate: string;
  contractEndDate: string;
  data: any;


  constructor(private apiService: ApiService) {
    // this.customerName = "First Customer Name";
    // this.customerAddress = "First Customer Address";
    // this.totalPrice  = "First Customer Total Price";
    // this.brokerName = "First Broker Name";
    // this.brokerAddress = "First Broker Address";
    // this.contractStartDate = "First Customer Contract Start Date";
    // this.contractEndDate = "First Customer Contract End Date"
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
