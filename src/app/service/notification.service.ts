import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _snackBar: MatSnackBar
  ) {
  }
  alertSuccess(message: any) {
    this._snackBar.open(message, "OK", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000,
      panelClass: ['green-snackbar', 'login-snackbar'],
    });
  }
  alertWarning(message: any) {
    this._snackBar.open(message, "X", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000,
      panelClass: ['red-snackbar', 'login-snackbar'],
    });
    console.log("error")
  }
}

