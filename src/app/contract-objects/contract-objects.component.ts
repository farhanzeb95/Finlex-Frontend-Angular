import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.customerName = "First Customer";
    this.customerAddress = "First Customer Address";
    this.totalPrice  = "First Customer Total Price";
    this.brokerName = "First Broker Name";
    this.brokerAddress = "First Broker Address";
    this.contractStartDate = "First Customer Contract Start Date";
    this.contractEndDate = "First Customer Contract End Date"
   }

  ngOnInit() {

  }

}
