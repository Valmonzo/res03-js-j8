class Pizza {#
    ingredients;

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
        let newIngredientsTab = [];
        for (let i = 0; i < this.#ingredients.length; i++) {

            if (ingredient.name !== this.#ingredients[i].name) {
                newIngredientsTab.push(this.#ingredients[i]);
            }
        }

        this.#ingredients = newIngredientsTab;

    }

    display() {
        let order = document.querySelector("aside ul li:last-of-type");
        let ul = document.querySelector("main aside ul");

        ul.innerHTML = "";


        for (let i = 0; i < this.#ingredients.length; i++) {
            let article = document.createElement("article");
            let header = document.createElement("header");
            let figure = document.createElement("figure");
            let img = document.createElement("img");
            let h3 = document.createElement("h3");
            let li = document.createElement("li");



            h3.textContent = this.#ingredients[i].name;
            img.setAttribute("src", this.#ingredients[i].file);
            img.setAttribute("alt", `image d'une ${this.#ingredients[i].name}`);
            article.setAttribute("data-name", this.#ingredients[i].name);
            figure.appendChild(img);
            header.appendChild(figure);
            header.appendChild(h3);
            article.appendChild(header);
            li.appendChild(article);
            ul.appendChild(li);
        }

        ul.appendChild(order);

    };

    cook() {



        setTimeout(function() {
            this.cooked();
        }, this.#ingredients.length * 1000)
    }

    cooked() {
        let pizzaReady = document.querySelector("aside section");
        pizzaReady.classList.toggle("hidden");
    }
}


export { Pizza };
