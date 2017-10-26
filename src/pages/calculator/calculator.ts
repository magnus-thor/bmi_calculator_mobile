import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: string;

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  }

  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      let finalBmi = this.weight / (this.height / 100 * this.height /100);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
    };
  }

  private setBMIMessage() {
    if (this.bmiValue < 18.5) {
      this.bmiMessage = 'Underweight',
      this.warningMessage();
    }
    if (this.bmiValue > 18.5 && this.bmiValue < 25) {
      this.bmiMessage = 'Normal',
      this.toastMessage();
    }
    if (this.bmiValue > 25 && this.bmiValue < 30) {
      this.bmiMessage = 'Overweight'
    }
    if (this.bmiValue > 30) {
      this.bmiMessage = 'Obese',
      this.warningMessage();
    }
  }

  warningMessage() {
    if (this.bmiMessage == 'Underweight') {
      let alert = this.alertCtrl.create({
        title: 'Underweight',
        subTitle: 'Go grab something to eat',
        buttons: ['OK']
      });
      alert.present();
    }
    if (this.bmiMessage == "Obese") {
      let alert = this.alertCtrl.create({
        title: 'Overweight',
        subTitle: 'Give your food to the underweight person',
        buttons: ['OK']
      });
      alert.present();
    }
  };

  toastMessage() {
    let toast = this.toastCtrl.create({
      message: 'Looking good',
      duration: 1000,
      position: 'middle'
    });
    toast.present();
  }
}
