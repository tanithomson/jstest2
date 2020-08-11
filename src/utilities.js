
var Dogs = require('./animal').Dogs
/**
 * A function to generate a list of dog as per the count provided
 * @param {*} count 
 */
function listOfDogs(count)
{
    
    let dogArray = []
    for(let i=0;i<count;i++)
    {
        // Used random number generator to generate the age
        var a = Math.floor((Math.random() * 10) + 1);
        var dog = new Dogs()
        dog.setAge = a
        dogArray.push(dog)
    }
    return dogArray
}
/**
 * A function to filter out puppies from the dog array
 * This returs an array containing puppies and
 * an array containig elder dogs
 * @param {*} dogArray 
 */
function filterPuppies (dogArray) {
let puppiesArr = []
let dogArr = []

for(let i=0;i<dogArray.length;i++)
    {
        if (dogArray[i].isBaby()) 
        {
            puppiesArr.push(dogArray[i])
        }
        else{
            dogArr.push(dogArray[i])
        }
        
    }

return { puppiesArr, dogArr}
}
exports.listOfDogs = listOfDogs
exports.filterPuppies = filterPuppies