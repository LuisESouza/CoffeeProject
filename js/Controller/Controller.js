import { Coffee } from "../Model/Coffee.js";
import { renderCoffee } from "../View/coffeeView.js";

async function init(){
    try {
        const coffeeModel = new Coffee();
        
        const coffees = await coffeeModel.getCoffee();

        renderCoffee(coffees);
    } catch (error) {
        console.error('Erro ao iniciar a aplicação:', error);
    }
}

init();