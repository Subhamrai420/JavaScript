"use strict"
// programming is most of the is about DATA. so we get data from somewhere we store and process data and then we give some data back, and that data, it has to go somewhere. so it stored in some place

// // how many elements in the Array
// console.log(friends[friends.length - 1])
// 1

// const friends = ["Subham", "Shivam","Dinnudon", "Mani", "Tarun" ]

// const firstName = "Subham"
// const birthYear = 1997

// const bioData = [firstName, "Rai", 2023 - birthYear, friends]
// console.log(bioData)

// Excersize
// const calcAge = function (birthYear) {
//   return 2023 - birthYear
// }

// const years = [1997, 2000, 2022, 1995]

// const age = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ]

// console.log(age)

// const friends = ["Subham", "Shivam", "Dinnudon", "Tarun", "Mani"]

// if (friends.includes("Subham")) {
//   console.log(`Hello Subham`)
// }

// const callTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// const bills = [125, 555, 44]
// const tips = [callTip(bills[0]), callTip(bills[1]), callTip(bills[2])]

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(tips)
// console.log(total)

// const subhamArray = [
//   "Subham",
//   "Rai",
//   2023 - 1997,
//   "Full Stack Developer",
//   ["Subham", "Dinnudon", "Mani", "Tarun"],
// ]

// console.log(
//   `My name is ${subhamArray[0]} ${subhamArray[1]}, and my age is ${subhamArray[2]}`
// )

// const subham = {
//   firstName: "Subham",
//   lastName: "Rai",
//   age: 2023 - 1997,
//   job: "Developer",
//   friends: ["Dinnudon", "Tarun", "Mani"],
// }

// subham.location = "Seoni"
// subham["gmail"] = "raisubham1024@gmail.com"
// // console.log(subham.lastName)
// // console.log(subham["firstName"])

// // const nameKey = "Name"
// // console.log(subham["first" + nameKey])
// // console.log(subham["last" + nameKey])

// const interestedIn = prompt(
//   `What do you want to know about Subham ? Choose between firstName, lastName, age, job, and friends, location, gmail`
// )

// if (subham[interestedIn]) {
//   console.log(subham[interestedIn])
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   )
// }

// // challenge
// // "Subham has 3 friends, and his best friend is called Michael"

// console.log(
//   `${subham["firstName"]} has ${subham.friends.length} friends, and his best friend is called ${subham.friends[2]}`
// )

// const subham = {
//   firstName: "Subham",
//   lastName: "Rai",
//   birthYear: 1997,
//   job: "Developer",
//   friends: ["Dinnudon", "Tarun", "Mani"],
//   hasDriverLicense: true,

//   // ----- first version (repetation) ------
//   // calcAge: function (birthYear) {
//   //   return 2023 - birthYear
//   // },

//   // ----- Second version (without repetation) ------
//   // calcAge: function (birthYear) {
//   //   // console.log(this)
//   //   return 2023 - this.birthYear
//   // },

//   // ----- Third version (calulation once, then store value in a VARIABLE for multiple same type of funtions ) ------
//   calcAge: function (birthYear) {
//     this.age = 2023 - this.birthYear
//     return this.age
//   },
// }

// // dot notation
// console.log(subham.calcAge())

// console.log(subham.age)
// console.log(subham.age)
// console.log(subham.age)

// // bracket notation
// console.log(subham["calcAge"](1996))

// Write a method called to get summary and this method should return a string which should kind of summarise the data about "Subham" or any other person data, that you might have used.
// And also say if I have a driving license or not.

// Example : "Subham is a 26-year old Developer, and he has "a or not" driver's license"

// const subham = {
//   firstName: "Subham",
//   currentYear: 2023,
//   birthYear: 1997,
//   calcAge: function (currentYear, birthYear) {
//     this.age = this.currentYear - this.birthYear
//     return this.age
//   },
//   job: "Developer",

//   hasDrivingLicense: function (age) {
//     this.drivingLicense = this.age >= 18 ? "a" : "not"
//     return this.drivingLicense
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDrivingLicense()} driver's license"`
//   },
// }

// //

// console.log(subham.getSummary())

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function (mass, height) {
//     this.BMI = this.mass / this.height ** 2
//     return this.BMI
//   },
// }

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function (mass, height) {
//     this.BMI = this.mass / this.height ** 2
//     return this.BMI
//   },
// }

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//       john.fullName
//     }'s BMI (${john.calcBMI()})`
//   )
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
//       mark.fullName
//     }'s BMI (${mark.calcBMI()})`
//   )
// }

// const friends = [
//   "Subham",
//   "Dinudon",
//   "Tarun",
//   "Mani",
//   "Shivam",
//   1997,
//   [3, 2, 1],
// ]
// const types = []
// for (let index = 0; index < friends.length; index++) {
//   console.log(friends[index])
//   types.push(typeof friends[index])
// }

// console.log(types)

// const birthYears = [1993, 1998, 2008, 2013, 1991, 1875]
// const age = []

// for (let i = 0; i < birthYears.length; i++) {
//   age.push(2023 - birthYears[i])
// }

// console.log(age)

// const subham = [
//   "Subham",
//   1997,
//   "Rai",
//   ["Mani", "Dinnudon", "Tarun"],
//   "Developer",
//   true,
//   "Gamer",
// ]

// for (let i = subham.length - 1; i >= 0; i--) {
//   console.log(i, subham[i])
// }
// for (let excercise = 1; excercise < 6; excercise++) {
//   console.log(`-------------- Start exercise ${excercise}--------------`)

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Excercise ${excercise} : Lifting weight repetition ${rep} 🏋️`)
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetitions ${rep}`)
// }

// let rep = 1
// while (rep <= 10) {
//   console.log(`Hello ${rep}`)
//   rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1

// while (dice !== 6) {
//   console.log(`You rolled : ${dice}`)
//   dice = Math.trunc(Math.random() * 6) + 1
// }
//-----------------------------------------------------------------

// const callTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// const bills = [125, 555, 44]
// const tips = [callTip(bills[0]), callTip(bills[1]), callTip(bills[2])]

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(tips)
// console.log(total)

// const callTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totals = []

// for (let index = 0; index < bills.length; index++) {
//   const tip = callTip(bills[index])
//   tips.push(tip)
//   totals.push(tip + bills[index])
// }

// console.log(bills, tips, totals)

// const calcAverage = function (arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i]
//     sum += arr[i]
//   }
//   return sum / arr.length
// }

// console.log(calcAverage(totals))

// We work for a company building a smart home array of temperature of one day. Calculate the temperature amplitude. Keep in mind that. Sometimes there might be a sensor error.

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5]

// //1. Understand the problem

// // -what is temp amplitude ? Answer : Difference between highest and lowest temp.
// // - How to compute max and min temperatures ?
// // -What's a sensor error? and what to do ?

// //2. Breaking up into sub-problems

// // -How to ignore errors ?
// // -Find max value in temp array
// // -Find min value in temp array
// // -Subtract min from max (AMPLITUDE) and return it

// const calTempAmplitude = function (temps) {
//   let max = temps[0]
//   let min = temps[0]
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i]

//     if (typeof curTemp !== "number") continue

//     if (curTemp > max) max = curTemp
//     if (curTemp < min) min = curTemp
//   }
//   console.log(max, min)
//   return max - min
// }

// // calTempAmplitude([11, 23, 8, 33, 37])
// const amplitude = calTempAmplitude(temperatures)
// console.log(amplitude)

// Problem 2:
// Function should now receive 2 arrays of temp

// 1) Understanding the problem.
// -with 2 Arrays, Should we implement functionality twice ? answer : no, just merge 2 arrays

// 2) Breaking up into sub-problems
// -Merge 2 arrays

// const calTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2)
//   console.log(temps)

//   let max = temps[0]
//   let min = temps[0]
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i]

//     if (typeof curTemp !== "number") continue

//     if (curTemp > max) max = curTemp
//     if (curTemp < min) min = curTemp
//   }
//   console.log(max, min)
//   return max - min
// }

// // calTempAmplitude([11, 23, 8, 33, 37])
// const amplitudeNew = calTempAmplitudeNew([3, 5, 1], [9, 0, 5])
// console.log(amplitudeNew)

// console.log(`----------------------------------`)

const printForecast = function (arr) {
  let str = ""

  for (let index = 0; index < arr.length; index++) {
    str += `${arr[index]}°C in ${index + 1} days...`
  }
  console.log("...", str)
}

const arr = [17, 21, 23]

printForecast(arr)
