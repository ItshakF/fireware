import { Component, Input, OnInit } from '@angular/core';
import { ApiData } from '../models/I.api-data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() cardData: ApiData;

  constructor() { }

  ngOnInit(): void {

  }

}
