import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  goals =[];
  counter:number;

  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.counter =this.goals.length;
    this._data.changeGoal(this.goals);
  }

}
