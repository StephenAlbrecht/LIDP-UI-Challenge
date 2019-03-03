import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-open-snack',
  templateUrl: 'open-snack.html'
})
export class OpenSnackComponent {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open('SLAYERRR', 'Close', {
      duration: 2000
    });
  }
}
