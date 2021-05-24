fn bmi(weight: u32, height: f32) -> &'static str {
  let bmi = weight as f32 / f32::powf(height, 2.0);
  if bmi <= 18.5 {
      return "Underweight"
  } else if bmi <= 25.0 {
      return "Normal"
  } else if bmi <= 30.0 {
      return "Overweight"
  } else {
      return "Obese"
  }
}