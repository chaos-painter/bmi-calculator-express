// Imports
import { createRequire } from 'module'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { calculateBMI } from '../controllers/calculator.js'

const require = createRequire(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url))

const express = require('express')
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'ejs')


// Routing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'templates/bmiCalculator.html'))
});


app.post('/result', (req, res) => {
  const units = req.body.units
  const height = req.body.height
  const weight = req.body.weight
  const gender = req.body.gender
  const bmi = calculateBMI(height, weight, units)
  res.render('result', { 
    title: 'BMI Result', 
    message: 'your BMI is...',
    units: units, 
    height: height,
    weight: weight,
    gender: gender,
    bmi: bmi
})
})


// Localhost
const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});
