import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StrengthUpdateService } from '../strength-bar/strengthUpdate.service';
import { CharacterCountService } from './character-count.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Output() newCharValueEvent = new EventEmitter<number>();

  value: number = 0;
  options: Options = {
    floor: 1,
    ceil: 32,
    step: 1,
    showTicks: false
  };

  constructor(
    private characterCountService: CharacterCountService, 
    private strengthUpdateService: StrengthUpdateService
  ) { }

  ngOnInit(): void {
  }

  updateValue(value: number) {
    this.newCharValueEvent.emit(value);
    this.characterCountService.updateCharCount(value);
    this.updateStrength();
  }

  updateStrength() {
    const { lower, upper, number, symbol } = this.characterCountService.getCurrentOptions();
    this.strengthUpdateService.updateStrength(lower, upper, number, symbol);
  }
}
