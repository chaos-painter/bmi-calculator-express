import { calculateBMI } from "./calculator.js";
export function message(height, weight, units) {
    const bmi = calculateBMI(height, weight, units);
  
    if (bmi < 18.5) {
      return "You should bulk";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "You should bulk more";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "You are well";
    } else {
      return "You are crazy";
    }
  }
  