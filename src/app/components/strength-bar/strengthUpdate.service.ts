import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CharacterCountService } from "../slider/character-count.service";

@Injectable()
export class StrengthUpdateService {

  /* Strength Value */
  private strengthValue = new BehaviorSubject<number>(1);
  castStrengthValue = this.strengthValue.asObservable();

  /* Strength Level */
  private strengthLevel = new BehaviorSubject<string>('');
  castStrengthLevel = this.strengthLevel.asObservable();
  strengthLevels = ['too weak!', 'weak', 'medium', 'strong'];

  constructor(private characterCountService: CharacterCountService) { }

  updateStrength(lower: boolean, upper: boolean, number: boolean, symbol: boolean) {
    let updatedStrength = 0;
    const charCount = this.characterCountService.getCurrentCharacterCount();

    // Length Contribution
    if (charCount >= 12) {
      updatedStrength += 3;
    } else if (charCount >= 8) {
      updatedStrength += 2;
    } else if (charCount >= 5) {
      updatedStrength += 1;
    }

    // Character Type Contribution
    if (lower) updatedStrength += 1;
    if (upper) updatedStrength += 1;
    if (number) updatedStrength += 1;
    if (symbol) updatedStrength += 2;

    this.strengthValue.next(updatedStrength);
    this.updateCurrentLevel();
  }

  updateCurrentLevel() {
    const score = this.strengthValue.getValue();
    let level = 'too weak!';

    if (score >= 7) {
      level = 'strong';
    } else if (score >= 5) {
      level = 'medium';
    } else if (score >= 3) {
      level = 'weak';
    }

    this.strengthLevel.next(level);
  }
}
