import getCountryCurrencyList from "./countryList.js"

let test = getCountryCurrencyList();
console.log(test)
/* Object.entries(test).map(([country,code])=>{
    console.log(country)
}) */

test.map(([country,code])=>{
    console.log(country,code)
})