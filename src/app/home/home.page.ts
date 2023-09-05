import { Component } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   time: BehaviorSubject<string> = new BehaviorSubject('00:00');

    timer: number;
    

  constructor() {}

   startTimer(duration: number){
    this.timer = duration * 60;
    setInterval( () => {
      this.updateTimeValue()
    }, 1000);
  }

   updateTimeValue(){
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);

  this.timer;

    if(this.timer < 0){
      this.startTimer(5)
    }


  }

}
