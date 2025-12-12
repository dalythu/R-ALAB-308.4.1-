// let CSV =
//   'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

// let count = 1

// let cell1 = ''
// let cell2 = ''
// let cell3 = ''
// let cell4 = ''

// let numColumns = 0;

// for (let i = 0; i < CSV.length; i++) {
//   if (CSV.charAt(i) === ',') {
//     count++
//   } else if (CSV.charAt(i) === '\n') {
//     console.log(cell1, cell2, cell3, cell4)

//     count = 1
//     cell1 = ''
//     cell2 = ''
//     cell3 = ''
//     cell4 = ''
//   } else {
//     if (count === 1) {
//       cell1 += CSV.charAt(i)
//     } else if (count === 2) {
//       cell2 += CSV.charAt(i)
//     } else if (count === 3) {
//       cell3 += CSV.charAt(i)
//     } else if (count === 4) {
//       cell4 += CSV.charAt(i)
//     }
//   }
// }
// console.log(cell1, cell2, cell3, cell4)

let CSV =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

const rows = CSV.split('\n')  
const data = []                

for (let i = 0; i < CSV.split('\n').length; i++) {
  data.push(CSV.split('\n')[i].split(','))
}

console.log(data)