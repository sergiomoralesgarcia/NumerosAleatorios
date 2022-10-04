import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  randomNum(a, b): number{
    return Math.round(Math.random() * (b - a))
  }

  num: number;
  scretNum: number = this.randomNum(0,100);
  lower: "..."

  constructor() {}

}




