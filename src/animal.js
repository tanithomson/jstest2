/**
 * Defined animal class with property age with its getter and setter
 * methods and an isBaby method to check whether
 * the animal is a baby
 * 
 * Defined dogs class which extends animal with color property and
 * overrides isBaby method
 * 
 * Used # before property to make it private.
 */
class Animal{
    #age
    constructor()
    {
    this.#age = 25
    }
    
    get getAge()
    {
        return this.#age
    }
    set setAge(age)
    {
        this.#age=age
    }
    isBaby()
    {
        if(this.getAge < 1)
        {
            return true
        } else
        {
            return false
        }
    }

}


class Dogs extends Animal
{
    #color
    constructor()
    {
        super()
        this.#color = 'red'
    }
    get getColor()
    {
        return this.#color
    }
    set setColor(color)
    {
        this.#color=color
    }
    isBaby()
    {
        if(this.getAge < 2)
        {
            return true
        } else
        {
            return false
        }
    }
     
}

module.exports = {Animal,Dogs}
