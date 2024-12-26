export function calculatePerfectWeight(heightInCm, units) {
    const idealBMI = 22.5; 
    const heightInM = heightInCm / 100;
    const perfectWeight = idealBMI * (heightInM * heightInM);
    let result = units.toLowerCase() === "imperial" ? perfectWeight * 2.20462 : perfectWeight;
    return parseFloat(result.toFixed(2));
  }
  