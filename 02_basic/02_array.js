const marvel_heros=['ironman','thor','spiderman']
const dc_heros=['batman','flash','superman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

//to access batman we have to do

// console.log(marvel_heros[3][1]) //not efficient way

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros)

//spread method

const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)

const another_arrar=[1,2,3,[4,5],6,[7,8,[9,10]]]

const another_new_array=another_arrar.flat(Infinity)
console.log(another_new_array)


console.log(Array.isArray("manawwer"))
console.log(Array.from("manawwer"))

console.log(Array.from({name : "manawwer"}))  //intrstng case intrvw

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))