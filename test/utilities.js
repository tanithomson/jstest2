var assert = require('assert');
var util = require('../src/utilities');
const { Console } = require('console');
var Dogs = require('../src/animal').Dogs
describe('Utilities', function () {
describe('listOfDogs()', function () {
    it('should return 5 if we pass 5 ', function () {
        assert.equal(util.listOfDogs(5).length, 5);  
    });
    it('should not return undefined for the return object for listOfDogs ', function () {
        assert.notEqual(util.listOfDogs(5)[0].isBaby, undefined);  
    });
});
describe('filterPuppies()', function () {
    const dogs = util.listOfDogs(15)
    var puppiesCount =0
    for(let i=0;i<dogs.length;i++)
    {
        if(dogs[i].isBaby())
        {puppiesCount++}
    }
    const { puppiesArr, dogArr } = util.filterPuppies(dogs)
    it('should return the length of puppies ', function () {
        assert.equal(puppiesArr.length , puppiesCount);  
    });
    it('should return the total length of dogsArray ', function () {
        assert.equal(puppiesArr.length + dogArr.length, 15);  
    });
    
});
});