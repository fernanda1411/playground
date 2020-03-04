// setTimeout(() => {
//     console.log('two seconds are up')
// }, 2000)

// const names = ['Nanda', 'Vini', 'Bro']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// // Takes callback function
// const geocode = (address, callback) => {
//    setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
        
//         callback(data)
//     }, 2000)
// }

// geocode('San Francisco', (data) => {
//     console.log(data)
// })


const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}


add(1, 4, (sum) => {
    console.log(sum) // Should print 5
})