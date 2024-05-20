import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StrengthUpdateService } from '../strength-bar/strengthUpdate.service';
import { CharacterCountService } from '../slider/character-count.service';

@Component({
  selector: 'app-checkbox-options',
  templateUrl: './checkbox-options.component.html',
  styleUrls: ['./checkbox-options.component.scss']
})
export class CheckboxOptionsComponent implements OnInit {

  upper = false;
  lower = true;
  number = false;
  symbol = false;

  @Output() changeUpperValueEvent = new EventEmitter<boolean>();
  @Output() changeLowerValueEvent = new EventEmitter<boolean>();
  @Output() changeNumberValueEvent = new EventEmitter<boolean>();
  @Output() changeSymbolValueEvent = new EventEmitter<boolean>();

  error = false;

  constructor(
    private strengthUpdateService: StrengthUpdateService,
    private characterCountService: CharacterCountService
  ) { }

  ngOnInit(): void {
    this.updateStrengthOptions();
  }

  checkForError() {
    if (!this.lower && !this.upper && !this.number && !this.symbol) {
      this.error = true;
      setTimeout(() => {
        this.error = false;
        this.lower = true;
        this.updateStrengthOptions();
      }, 3000);
    } else {
      this.error = false;
    }
  }

  updateLowerOption() {
    this.lower = !this.lower;
    this.updateStrengthOptions();
    this.changeLowerValueEvent.emit(this.lower);
  }

  updateUpperOption() {
    this.upper = !this.upper;
    this.updateStrengthOptions();
    this.changeUpperValueEvent.emit(this.upper);
  }

  updateNumberOption() {
    this.number = !this.number;
    this.updateStrengthOptions();
    this.changeNumberValueEvent.emit(this.number);
  }

  updateSymbolOption() {
    this.symbol = !this.symbol;
    this.updateStrengthOptions();
    this.changeSymbolValueEvent.emit(this.symbol);
  }

  updateStrengthOptions() {
    this.characterCountService.setOptions(this.lower, this.upper, this.number, this.symbol);
    const { lower, upper, number, symbol } = this.characterCountService.getCurrentOptions();
    this.strengthUpdateService.updateStrength(lower, upper, number, symbol);
    this.checkForError();
  }
}
