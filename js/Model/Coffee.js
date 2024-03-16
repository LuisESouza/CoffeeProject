export class Coffee {
    constructor(){}

    async getCoffee() {
        const apiUrl = `https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`
        
        try{
            const response = await fetch(apiUrl);
            const coffee = await response.json();
            return coffee.map(coffee => ({
                name: coffee.name,
                image: coffee.image,
                price: coffee.price,
                rating: coffee.rating,
                votes: coffee.votes,
                popular: coffee.popular,
                available: coffee.available,
            }));


        }catch(error){
            console.log(error)
        }
    }
}