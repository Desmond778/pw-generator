import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password = '';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeLength(value: string) {
    this.clearPassword();
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.clearPassword();
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.clearPassword();
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.clearPassword();
    this.includeSymbols = !this.includeSymbols;
  }

  clearPassword() {
    this.password = '';
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if(this.includeLetters) {
      validChars += letters;
    }

    if(this.includeNumbers){
      validChars += numbers;
    }

    if(this.includeSymbols) {
      validChars += symbols;
    }

    let gerneratedPassword = '';

    for(let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      gerneratedPassword += validChars[index];
    }

    this.password = gerneratedPassword;

  }
  
  // onButtonClick() {
  //   // console.log('Button was clicked');
  //   console.log(`
  //     About to generate a password with the following:
  //     Include Letters : ${this.includeLetters}
  //     Include Numbers : ${this.includeNumbers}
  //     Include Symbols : ${this.includeSymbols}
  //   `);
  //   this.password = 'MY PASSWORD!!!';
  // }

  getName() {
    return 'Desmond';
  }
  
}
