const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
       return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return  this._courses.desserts;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    set mains(mains) {
        this._courses.mains = mains;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },
    get courses() {
        return {
           appetizers: this.appetizers,
           mains: this.mains,
           desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name : dishName,
            price: dishPrice,
        }
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} and the total price is ${totalPrice}`
    }
}

menu.addDishToCourse('appetizers', 'fufu', 4.00);
menu.addDishToCourse('appetizers', 'chicken', 4.50);
menu.addDishToCourse('appetizers', 'banku', 5.00);

menu.addDishToCourse('mains', 'rice', 6.00);
menu.addDishToCourse('mains', 'plantain', 7.50);
menu.addDishToCourse('mains', 'nuts', 8.00);

menu.addDishToCourse('desserts', 'beans', 14.00);
menu.addDishToCourse('desserts', 'gari', 24.50);
menu.addDishToCourse('desserts', 'okro', 15.00);

const meal = menu.generateRandomMeal();
console.log(meal);