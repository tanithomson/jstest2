var assert = require('assert');
var Q2 = require('../src/animal')
var Animal = require('../src/animal').Animal
var Dogs = require('../src/animal').Dogs
describe('animal', function () {
    var animal = new Animal()
    var dog = new Dogs()
    
  describe('#getAge()', function () {
    it('should return 25', function () {
            assert.equal(animal.getAge, 25);  
    });
});
    describe('#setAge()', function () {
        it('should return 10 after calling the setter method with 10', function () {
            animal.setAge = 10
            assert.equal(animal.getAge, 10);  
        });
  });
   describe('#getColor()', function () {
    it('should return red', function () {
       assert.equal(dog.getColor, 'red');  
    });
});
  describe('#setColor()', function () {
    it('should return green after calling the setter method with green', function () {
        dog.setColor = 'green'
        assert.equal(dog.getColor, 'green');  
    });
});
  describe('isBaby()', function () {
    it('should return true after calling the setter method with value 0.5', function () {
        animal.setAge = 0.5
        assert.equal(animal.isBaby(), true);  
    });
    it('should return false after calling the setter method with value > 1', function () {
        animal.setAge = 10
        assert.equal(animal.isBaby(), false);  
    });
});

  describe('isBaby()', function () {
    it('override the isBaby function for dog with a test for age <  2 years', function () {
        dog.setAge = 1
        assert.equal(dog.isBaby(), true);  
    });
    it('override the isBaby function for dog with a test for age <  2 years', function () {
        dog.setAge = 3
        assert.equal(dog.isBaby(), false);  
    });
});
 
});