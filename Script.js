// let location = {
//     name: 
// }
// let name = ['Mig', 'red', 'yalow'];
// undefined
// name [0] = 'Miguel'
// 'Miguel'
// name [2] = 'Yellow'
// 'Yellow'
// name
// (3) ['Miguel', 'red', 'Yellow']
// let wife = ['kyla','anne','gutib']
// undefined
// name [2] = 'monacillo'
// 'monacillo'
// name [1] = brando
// VM400:1 Uncaught ReferenceError: brando is not defined
//     at <anonymous>:1:12
// (anonymous) @ VM400:1
// name [1] = 'brando'
// 'brando'
// let newlyWed = name.concat(wife)
// undefined
// newlyWed
// (6) ['Miguel', 'brando', 'monacillo', 'kyla', 'anne', 'gutib']
// let newlyWed = wife.concat(name)
// undefined
// newlyWed
// (6) ['kyla', 'anne', 'gutib', 'Miguel', 'brando', 'monacillo']
// let nums = [1,2,3]
// undefined
// let numsCopy = nums
// undefined
// nums === numsCopy
// true
// const resto = {}
// undefined
// const resto = {
//     name: Miguel,
//     secName: Brando,
//     add: Purok 4,
//     state: Cebu
// }
// VM976:4 Uncaught SyntaxError: Unexpected number
// const resto = {
//     name: Miguel,
//     secName: Brando,
//     state: Cebu
// }
// VM991:2 Uncaught ReferenceError: Miguel is not defined
//     at <anonymous>:2:11
// (anonymous) @ VM991:2
// const resto = {}
// undefined
// const resto = {
//     name: 'Miguel',
//     address: `${Math.floor(Math.random) * 100) + 1} Jhnson Ave`,
//     city: 'Brooklyn',
//     state: 'NY',
//     zipcode: '11206',
// }
// VM1242:3 Uncaught SyntaxError: Missing } in template expression
// const resto = {
//     name: 'Miguel',
//     address: `${Math.floor(Math.random() * 100) + 1} Jhnson Ave`,
//     city: 'Brooklyn',
//     state: 'NY',
//     zipcode: '11206',
// }
// undefined
// let fullAddress = {'address' + 'city' }
// VM1458:1 Uncaught SyntaxError: Unexpected token '+'
// let fullAddress = ["address"]
// undefined
// resto 
// {name: 'Miguel', address: '67 Jhnson Ave', city: 'Brooklyn', state: 'NY', zipcode: '11206'}
// resto['address','city']
// 'Brooklyn'
// resto['address''+''city']
// VM1690:1 Uncaught SyntaxError: Unexpected string
// resto[['address'], ['city']]
// 'Brooklyn'
// resto[['address'] + ['city']]
// undefined
// resto.address(resto.city)
// VM1956:1 Uncaught TypeError: resto.address is not a function
//     at <anonymous>:1:7
// (anonymous) @ VM1956:1
// let fullAdd = resto.address + "," + resto.city + " " + resto.state + " " + resto.zipcode
// undefined
// fullAdd
// '67 Jhnson Ave,Brooklyn NY 11206'
// const score = {math: 98, english: 75}
// undefined
// score.math = 75
// 75
// score.math
// 75
// score
// {math: 75, english: 75}
// score.pe = 90
// 90
// score
// {math: 75, english: 75, pe: 90}
// name
// (3) ['Miguel', 'brando', 'monacillo']
// const comments = [
//     {username: 'Tammy', text: 'lololol', votes: 9},
//     {username: 'FishBoi', text: 'glub glub', votes: '1234'}
// ]
// undefined
// comments
// (2) [{…}, {…}]0: {username: 'Tammy', text: 'lololol', votes: 9}1: {username: 'FishBoi', text: 'glub glub', votes: '1234'}length: 2[[Prototype]]: Array(0)
// comments.1
// VM2637:1 Uncaught SyntaxError: Unexpected number
// comments[1].text
// 'glub glub'
// for (let num = 25; num >= 0; num -= 5){
//     console.log(num);
// }
// const animals = ['lions', 'bears', 'owl'];
// for (let i = 0; i < animals.length;){
//     console.log(i, animals[i]);
// }
// for (let i = 0; i < animals.length; i++){
//     console.log(i, animals[i]);
// }
for (let i = 0; i < names.length; i++){
    console.log(i, names[i].toUpperCase());
}