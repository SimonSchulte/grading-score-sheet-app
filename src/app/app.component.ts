import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'grading-score-sheet-app';
}
