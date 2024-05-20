import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterCountService {
  currentCharCount = 0;
  lower = false;
  upper = false;
  number = false;
  symbol = false;

  updateCharCount(count: number) {
    this.currentCharCount = count;
  }

  setOptions(lower: boolean, upper: boolean, number: boolean, symbol: boolean) {
    this.lower = lower;
    this.upper = upper;
    this.number = number;
    this.symbol = symbol;
  }

  getCurrentOptions() {
    return {
      lower: this.lower,
      upper: this.upper,
      number: this.number,
      symbol: this.symbol
    };
  }

  getCurrentCharacterCount() {
    return this.currentCharCount;
  }
}
