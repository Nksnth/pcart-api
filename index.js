fetch("https://pizza-api.projectcodex.net/api/pizzas")
.then(response => response.json())
.then(data => {
    console.log(data);
    const pizzaListContainer = document.querySelector(".pizza-list");
    data.pizzas.forEach(pizza => {
        let listItem = document.createElement("li");
        listItem.textContent = `${pizza.size} ${pizza.flavour} Pizza R${pizza.price} Buy`
        pizzaListContainer.appendChild(listItem);
    });
})