const fs = require('fs');



// function  funcaoQueExiste() {
//     console.log('antes do error')
//     throw 'error das galaxias'
//     console.log('antes depois error')
// }

try {
    // console.log(fs.readFileSync('test.txt').toString())
    throw new Error('Required das galaxias');
} catch(e) {
    console.log(e)
    // fs.writeFileSync('test.txt', 'pimpolho e um cara tao legal')
} finally {
    console.log('To nem ai se deu erro')
}
