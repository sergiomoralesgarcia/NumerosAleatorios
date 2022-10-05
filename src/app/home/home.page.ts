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
  secretNum: number = this.randomNum(0,100);
  lower = "...";

  constructor() {}

  comprobationNum() {
    if (this.num) {
      if (this.secretNum < this.num) {
        this.lower = 'menor';
      }
      else if (this.secretNum > this.num) {
        this.lower = 'mayor';
      }
      else {
        this.lower = '';
      }
    }
  }

  reload(){
    // reiniciamos las variables
    this.num = null;
    this.lower = '...';
    this.secretNum = this.randomNum(0,100);
  }
}




