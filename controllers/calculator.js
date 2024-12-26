export function calculateBMI(height, weight, units) {
  units = units.toLowerCase()
  if (units == "metric") {
    return weight / (height*height)
  }
  else {
    return weight / (height*height) * 703
  }
}