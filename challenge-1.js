// challenge 1

const mark_weight = 95
const mark_height = 1.88

const john_weight = 85
const john_height = 1.76

// BMI = mass/ height ** 2

const mark_BMI = mark_weight / mark_height ** 2
const john_BMI = john_weight / john_height ** 2

const markHigherBMI = mark_BMI > john_BMI

console.log("Mark BMI is Higher than John BMI : " + markHigherBMI)
