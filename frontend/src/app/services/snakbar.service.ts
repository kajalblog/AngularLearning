import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnakbarService {

  constructor(private snakbar: MatSnackBar) { }

  openSnakbar(message: string, action: string) {
    if (action == 'error') {
      this.snakbar.open(message, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 4000,
        panelClass: ['black-snackbar']
      });
    }
    else {
      this.snakbar.open(message, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 4000,
        panelClass: ['green-snackbar']
      });
    }
  }
}

