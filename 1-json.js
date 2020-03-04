const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)
// console.log(data.title)


// console.log(bookJSON)
// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)


const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)
//console.log(data)

data.name = 'Fernanda'
data.age = 32

console.log(data)

const str = JSON.stringify(data)
console.log(str)
fs.writeFileSync('1-json.json', str)