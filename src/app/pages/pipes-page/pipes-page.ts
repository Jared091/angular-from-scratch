import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipes-page',
  imports: [ UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, DecimalPipe, CurrencyPipe, PercentPipe ],
  templateUrl: './pipes-page.html',
})
export class PipesPageComponent { 
  firstName = signal('jared');
  lastName = signal('GARCIA');

  user = signal({ 
    id: 1,
    firstName: this.firstName(),
    lastName: this.lastName(),
    age: 25,
    email: 'jared.garcia@example.com'
  });

  currentDate = signal(new Date());
  birthDate = signal(new Date(2000, 9, 13));

  price = signal(1234.567);
  percentage = signal(0.256);


}
