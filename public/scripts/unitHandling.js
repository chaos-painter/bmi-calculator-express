const heightUnit = document.getElementById("heightUnit")
const weightUnit = document.getElementById("weightUnit")

const unitSelect = document.getElementById("units")

console.log(unitSelect.value)

unitSelect.addEventListener("change", () => {
  if (unitSelect.value === "metric") {
    heightUnit.textContent = "cm"
    weightUnit.textContent = "kg"
  }
  else {
    heightUnit.textContent = "in"
    weightUnit.textContent = "lbs"
  }
})
