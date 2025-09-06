import { Component, inject } from "@angular/core";
import { MatButtonModule, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import {
    MatSnackBarAction,
    MatSnackBarActions,
    MatSnackBarLabel,
    MatSnackBarRef,
} from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'snack-bar-annotated-component-example-snack',
    template: `

    <span class="example-pizza-party" matSnackBarLabel>
    Erreichte Punkte > Maximale Punktzahl!
    </span>
    <span matSnackBarActions>
    <button  mat-icon-button matSnackBarAction (click)="snackBarRef.dismissWithAction()">
     <mat-icon>warning</mat-icon>
    </button>
    </span>

    `,
    styles: [
        `
      :host {
        display: flex;
      }
  
      .example-pizza-party {
        color: hotpink;
      }
    `,
    ],
    imports: [MatButtonModule, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction, MatIconModule]
})
export class InvalidPercentageAnnotatedComponent {
    snackBarRef = inject(MatSnackBarRef);
}