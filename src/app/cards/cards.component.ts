import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ApiData } from '../models/I.api-data.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent implements OnInit {

  @Input() allApi: ApiData[];
  constructor(private apiService: ApiService) {
    //  this.allApi = [];
   }

  ngOnInit(): void {

  }

}
