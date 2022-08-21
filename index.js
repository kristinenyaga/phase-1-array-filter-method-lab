// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

const findMatching=(drivers,property)=>{
    return drivers.filter((driver)=>driver.toLowerCase() === property.toLowerCase())

}
const fuzzyMatch=(drivers,property)=>{
    return drivers.filter((driver)=>driver.toLowerCase().substring(0, property.length) === property.toLowerCase())
}
const matchName=(drivers,property)=>{
    return drivers.filter((driver)=>driver.name === property)
}
        
