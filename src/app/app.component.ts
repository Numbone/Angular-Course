import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyCalculatorComponent} from "./my-calculator/my-calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-course';
  tooltipOneWay:string='First Props';
  tooltipTwoWay:string='First Props';
  showMessage(){
    alert("WoW text")
  }
}
