const input = document.getElementsByTagName("input")[0]

const elements = {
  inputs: [document.getElementById("meters-input-value"),
    document.getElementById("feet-input-value"),
    document.getElementById("liters-input-value"),
    document.getElementById("gallons-input-value"),
    document.getElementById("kilos-input-value"),
    document.getElementById("pounds-input-value")
  ],
  
  results: {
    meters: document.getElementById("meters-result-value"),
    feet: document.getElementById("feet-result-value"),
    liters: document.getElementById("liters-result-value"),
    gallons: document.getElementById("gallons-result-value"),
    kilos: document.getElementById("kilos-result-value"),
    pounds: document.getElementById("pounds-result-value")
  }
}

const values = {
  meters: 0,
  feet: 0,
  liters: 0,
  gallons: 0,
  kilos: 0,
  pounds: 0
}


const conversionRate = {
  metersToFeet: 3.28084,
  feetToMeters: 0.305,
  litersToGallons: 0.2641722,
  gallonsToLiters: 3.785,
  kilosToPounds: 2.2,
  poundsToKilos: 0.45359237
}





input.addEventListener("keyup", handleEvent)


function ShowInputValues() {
  elements.inputs.forEach(element => element.textContent = input.value)
 }

 function convertValues (unitConversionRateKey, desiredUnit ) {
    const result = input.value * conversionRate[unitConversionRateKey]
    elements.results[desiredUnit].textContent = result.toFixed(2)
   }

function handleEvent (){
  ShowInputValues()
  convertValues("metersToFeet", "feet")
  convertValues("feetToMeters", "meters")
  convertValues("litersToGallons", "gallons")
  convertValues("gallonsToLiters", "liters")
  convertValues("kilosToPounds", "pounds")
  convertValues("poundsToKilos", "kilos")
}