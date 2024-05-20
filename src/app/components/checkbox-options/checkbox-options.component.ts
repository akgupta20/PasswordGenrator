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

  @Output() changeUpperValueEvent = new EventEmitter<{}>();
  @Output() changeLowerValueEvent = new EventEmitter<{}>();
  @Output() changeNumberValueEvent = new EventEmitter<{}>();
  @Output() changeSymbolValueEvent = new EventEmitter<{}>();

  error = false;

  constructor(
    private strengthUpdateService: StrengthUpdateService,
    private characterCountService: CharacterCountService
  ) { }

  ngOnInit(): void { }

  checkForError() {
    if (!this.lower && !this.upper && !this.number && !this.symbol) {
      this.error = true;
      setTimeout(() => {
        this.error = false;
        this.lower = true;
        this.updateStrengthOptions();
      }, 5000);
    } else {
      this.error = false;
    }
  }

  updateLowerOption() {
    this.lower = !this.lower;
    this.updateStrengthOptions();
  }

  updateUpperOption() {
    this.upper = !this.upper;
    this.updateStrengthOptions();
  }

  updateNumberOption() {
    this.number = !this.number;
    this.updateStrengthOptions();
  }

  updateSymbolOption() {
    this.symbol = !this.symbol;
    this.updateStrengthOptions();
  }

  updateStrengthOptions() {
    this.characterCountService.setOptions(this.lower, this.upper, this.number, this.symbol);
    this.strengthUpdateService.updateStrength(this.lower, this.upper, this.number, this.symbol);
    this.checkForError();
  }
}
