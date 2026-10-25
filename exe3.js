
class Animal {
    constructor(name, species) {
        this.name = name
        this.species = species
        this.lastFedTime = null
    }

    feed() {
        this.lastFedTime = new Date()
    }
}

class Carnivore extends Animal {
    constructor(name, species) {
        super(name, species)

    }
    feed() {
        super.feed();
        console.log(`Feeding carnivore ${this.species} - meat served`)
    }
}

class Herbivore extends Animal {
    constructor(name, species) {
        super(name, species)
    }

    feed() {
        super.feed();
        console.log(`Feeding herbivore ${this.species} - veggies served.`)
    }

}

class Zookeeper {
    constructor(list = []) {
        this.list = list
    }

    addAnimal(animal) {
        this.list.push(animal)
    }

    feedAll() {
        this.list.forEach(animal => {
            animal.feed()
        });

    }

    getLastFed(name) {
        const animal = this.list.find(function (animal) {
            return animal.name === name
        })

        return animal ? animal.lastFedTime : null
    }

    getBySpecies(species) {
        return this.list.filter(function (animal) {
            return animal.species === species
        })
    }
}




