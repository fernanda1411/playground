// Object property shorthand

const name = 'Fernanda'
const userAge = 32

const user = {
    name,
    age: userAge,
    location: 'San Francisco'
}

console.log(user)



// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label, stock} = product
// console.log(label)
// console.log(stock)

const transaction = (type, {label, stock}) =>  {
    console.log(type, label, stock)
}

transaction('order', product)
