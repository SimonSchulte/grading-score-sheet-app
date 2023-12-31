import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  selector: 'app-footer',
  template: `
    <mat-toolbar class="mat-primary"> 
      <div class="footer-content">  
        <div>© 2023 - Simon Schulte</div>
        <span class="example-spacer"></span>
        <div>&nbsp;| &nbsp;</div> 
        <div>notenspicker&#64;gmail.com </div> 
      </div>
    </mat-toolbar>
  `,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
