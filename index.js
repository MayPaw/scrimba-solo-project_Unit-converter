const inputHtml = document.getElementsByTagName("input")[0]


/* Units array - data for conversion and DOM linking*/

const units = [
  {
    measure: "length", 
    unit: "meters", 
    convertionRate: 0.305,
  },

  {
    measure: "length", 
    unit: "feet",
    convertionRate: 3.28084,
  },
  
  {
    measure: "volume", 
    unit: "liters", 
    convertionRate: 0.2641722,
  },

  {
    measure: "volume", 
    unit: "gallons",
    convertionRate: 3.785
  },

  {
    measure: "mass",
    unit: "kilos", 
    convertionRate: 2.2,
  },

  {
    measure: "mass",
    unit: "pounds",
    convertionRate: 0.45359237
  }
]


/* Elements Array - array with links to DOM*/
const elementsArray = generateElementsArray()


/* generateElementArray - the function uses units array to map through 
all measures and returns array with links to DOM */

function generateElementsArray(){
  return units.map(object => {
      return {
         measure: object.measure,
         unit: object.unit,
         input: document.getElementById(object.unit + "-input-value"),
         result: document.getElementById(object.unit + "-result-value"),
     }
   })
 }

function updateElementsInputValue() {
  elementsArray.forEach(element => element.input.textContent = inputHtml.value)
}



/* calcValue() interates through both data arrays to compare each measure 
and unit property values, and then choose the right convertionRate*/

function calcValue(){
  for (const element of elementsArray) {
    for (const object of units) {
      const result = element.result
      const input = element.input.textContent
      if (element.measure === object.measure && 
        element.unit === object.unit) {
          result.textContent = (input * object.convertionRate).toFixed(3)
        } 
        else if (element.measure === object.measure && 
          element.unit === object.imperial){
            result.textContent = (input * object.convertionRate).toFixed(3)
        }
    }
  }
}

function handleEvent() {
  updateElementsInputValue()
  calcValue()
}


inputHtml.addEventListener("keyup", handleEvent)
