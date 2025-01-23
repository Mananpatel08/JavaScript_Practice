const marvel = [ "Ironman" , "Spiderman" , "Thor" ]
const dc = [ "Superman" , "Batman" , "Flash" ]
// marvel.push(dc)                       // [ 'Ironman', 'Spiderman', 'Thor', [ 'Superman', 'Batman', 'Flash' ] ]
// console.log(marvel)    

// const allhero = marvel.concat(dc)       // becuase concat return new array and push not
// console.log(allhero)                    // [ 'Ironman', 'Spiderman', 'Thor', 'Superman', 'Batman', 'Flash' ]

// concat sprade operator
const allhero = [ ...marvel , ...dc ]
console.log(allhero)                       // [ 'Ironman', 'Spiderman', 'Thor', 'Superman', 'Batman', 'Flash' ]

console.log(Array.from("Manan"))           // [ 'M', 'a', 'n', 'a', 'n' ]