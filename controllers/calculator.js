export function calculateBMI(height, weight, units) {
  units = units.toLowerCase()
  if (units == "metric") {
    let h=height/100
    let bmi=weight/(h*h)
    return bmi.toFixed(2)
  }
  else {
    let w = weight / (height*height) * 703
    return w.toFixed(2)
  }
}