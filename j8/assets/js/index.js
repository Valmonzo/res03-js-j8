import { Ingredient } from './classes/ingredient.js';
import { Pizza } from './classes/pizza.js';


window.addEventListener("DOMContentLoaded", function(event) {
    let availableIngredient = [];

    let bacon = new Ingredient("Bacon", "assets/img/bacon.png");
    let carotte = new Ingredient("Carotte", "assets/img/carrots.png");
    let fromage = new Ingredient("Fromage", "assets/img/cheese.png");
    let oeuf = new Ingredient("Oeuf", "assets/img/egg.png");
    let aubergine = new Ingredient("Aubergine", "assets/img/eggplant.png");
    let fromageDeChevre = new Ingredient("Fromage de chèvre", "assets/img/goat-cheese.png");
    let miel = new Ingredient("Miel", "assets/img/honey.png");
    let champignon = new Ingredient("Champignon", "assets/img/mushroom.png");
    let olive = new Ingredient("Olive", "assets/img/olive.png");
    let piment = new Ingredient("Piment", "assets/img/pepper.png");
    let pdterre = new Ingredient("Pomme de terre", "assets/img/potato.png");
    let tomate = new Ingredient("Tomate", "assets/img/tomato.png");


    availableIngredient.push(bacon);
    availableIngredient.push(carotte);
    availableIngredient.push(fromage);
    availableIngredient.push(oeuf);
    availableIngredient.push(aubergine);
    availableIngredient.push(fromageDeChevre);
    availableIngredient.push(miel);
    availableIngredient.push(champignon);
    availableIngredient.push(olive);
    availableIngredient.push(piment);
    availableIngredient.push(pdterre);
    availableIngredient.push(tomate);

    console.log(availableIngredient);


    for (let i = 0; i < availableIngredient.length; i++) {
        let article = document.createElement("article");
        let header = document.createElement("header");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        let ul = document.querySelector("#stage ul");
        let li = document.createElement("li");



        h3.textContent = availableIngredient[i].name;
        img.setAttribute("src", availableIngredient[i].file);
        img.setAttribute("alt", `image d'une ${availableIngredient[i].name}`);
        article.setAttribute("data-name", availableIngredient[i].name);
        figure.appendChild(img);
        header.appendChild(figure);
        header.appendChild(h3);
        article.appendChild(header);
        li.appendChild(article);
        ul.appendChild(li);

    }

    let allArticle = document.querySelectorAll("#stage article");
    let newPizza = null;

    for (let i = 0; i < allArticle.length; i++) {

        allArticle[i].addEventListener("click", function(e) {
            allArticle[i].classList.toggle("selected");


            if (newPizza === null) {
                newPizza = new Pizza();
            }
            let ingName = allArticle[i].getAttribute("data-name");


            if (ingName === availableIngredient[i].name && allArticle[i].classList.contains("selected")) {
                newPizza.addIngredient(availableIngredient[i]);
                newPizza.display();
            }
            else {
                newPizza.removeIngredient(availableIngredient[i]);
                newPizza.display();
            }





        });

    }

    let order = document.querySelector("aside ul li:last-of-type");

    order.addEventListener("click", function(e) {
        let clearIngredients = document.querySelectorAll("aside ul li:not(:last-of-type)");
        for (let i = 0; i < clearIngredients.length; i++) {
            clearIngredients[i].innerHTML = "";
            newPizza.removeIngredient(availableIngredient[i])
        }
        for (let i = 0; i < allArticle.length; i++) {
            if(allArticle[i].classList.contains("selected")) {
                allArticle[i].classList.remove("selected")
            }
        }
        newPizza.cook();
        newPizza.cooked();
    });



})
