import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-open-snack',
  templateUrl: '../html/open-snack.html',
  styleUrls: ['../css/open-snack.css']
})
export class OpenSnackComponent {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open('Have a cookie!', 'Accept cookie', {
      duration: 2500
    });
  }
}
