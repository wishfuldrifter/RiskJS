import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss'],
})
export class DiceRollerComponent implements OnInit {
  numSide: number;
  numDice: number;
  result: number;

  constructor() {}

  ngOnInit(): void {
    this.numSide = 6;
    this.numDice = 1;
  }

  rollDice(sides: number, howMany: number): number {
    this.result = 0;

    for (let i = 0; i < howMany; i++)
      this.result += Math.floor(Math.random() * sides) + 1;

    return this.result;
  }
}
