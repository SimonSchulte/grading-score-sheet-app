import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    template: `
  <div class="langing-page-content"> Bildungsgang über das Menü auswählen. </div>
  `,
  standalone: true
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
