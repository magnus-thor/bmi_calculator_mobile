import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { CalculatorPage } from '../calculator/calculator';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  calculatorTab = CalculatorPage;
  aboutTab = AboutPage;

  constructor() {

  }
}
