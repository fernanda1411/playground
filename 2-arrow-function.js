// const square = function(x){
//     return x * x
// }

// console.log(square(3))

// const square = x => x * x
// console.log(square(3))

const event = {
    name: 'Birthday party',
    guestList: ['Fernanda', 'Vini'],
    printGuessList = () => {
        console.log('Guess list for ' + this.name)
            
        this.guestList.forEach((guest) => {
            console.log(guest + 'is attending ' + this.name)
        })
    }
}

event.printGuessList()