import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {KeyValuePipe, NgForOf} from "@angular/common";

interface CalcGroup{
  first:CalcVar,
  second:CalcVar,
  operation:CalcOperations
}

interface CalcVar{
  value:number;
  modification: CalcModifiers;
}

enum CalcOperations{
  PLUS="+",
  MINUS="-",
  MULTIPLY="*",
  DIVIDER="/"
}

enum CalcModifiers{
  NONE="NONE",
  SIN="SIN",
  COS="COS",
  SQUARE="SQUARE"
}

@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    KeyValuePipe
  ],
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss'
})
export class MyCalculatorComponent {
  public calcOperations=CalcOperations;
  public calcModifiers: CalcModifiers=CalcModifiers.NONE;
  public calcGroup:CalcGroup[]=[
    {
      first:{
        modification:CalcModifiers.NONE,
        value:0
      },
      second:{
        modification:CalcModifiers.NONE,
        value:0
      },
      operation:CalcOperations.PLUS
    }
  ];
  public history:string[]=[];

  public operationBetweenGroups:CalcOperations[]=[]

  public first:number=1;
  public second:number=1;

  public operation:string="+";
  public operations:string[]=["+","-","*","/"];

  public result?:number;

  public calc(){
    switch (this.operation){
      case "+":
        this.result=this.first+this.second;
        return;
      case "-":
        this.result=this.first-this.second;
        return;
      case "*":
        this.result=this.first*this.second;
        return;
      case "/":
        this.result=this.first/this.second;
        return;
      default:
        return 0;
    }
  }
}
