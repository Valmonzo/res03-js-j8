class Pizza{
    #ingredients;

    constructor() {
        this.#ingredients = [];
    }

    get ingredients() {
        return this.#ingredients;
    }


    addIngredient(ingredient) {
        this.#ingredients.push(ingredient);
    }

    removeIngredient(ingredient) {
        let newIngredienstTab = []
        for(let i = 0; this.#ingredients.length; i++) {
            if(ingredient !== this.#ingredients[i]) {
                newIngredientsTab.push(this.#ingredients[i]);
            }
        }

        this.#ingredients = newIngredientsTab;

    }

    display(){};
}


export { Pizza };