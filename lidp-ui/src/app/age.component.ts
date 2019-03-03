import {Component} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-age',
  templateUrl: 'age.html'
})
export class AgeComponent {
  public age: number;
  maxDate = new Date();

  constructor() { }

  public CalculateAge(date: MatDatepickerInputEvent<Date>): void {
      const birthdate = date.value;
      const timeDiff = Math.abs(Date.now() - new Date(birthdate).getTime());
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}
