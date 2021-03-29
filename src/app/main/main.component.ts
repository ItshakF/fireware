import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { ApiData } from '../models/I.api-data.model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  api: string;
  apiNameControl = new FormControl();
  allApi: Observable<ApiData[]>;

  constructor(private apiService: ApiService) {
    this.allApi = of([]);
   }

  ngOnInit(): void {
    this.apiService.getAllApi().subscribe(data => {
      this.allApi = of(data.entries);
    });
  }

  search() {
    this.apiNameControl.valueChanges.pipe(debounceTime(1000)).subscribe(apiName => {
      this.apiService.getApiByTitle(apiName).subscribe(data => {
        this.allApi = of(data.entries);

      })
    })
  }

}
