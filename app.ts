import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SmartdopeComponent } from './smartdope/smartdope.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule,SmartdopeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
 
}
