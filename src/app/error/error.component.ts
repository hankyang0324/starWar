import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { Router } from '@angular/router';

@Component({
  templateUrl: "./error.component.html",
  selector: "app-error",
})
export class ErrorComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }, private router: Router) {
    this.router.navigate(['']);
  }
}