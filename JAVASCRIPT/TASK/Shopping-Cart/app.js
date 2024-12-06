let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let card = document.querySelector(".card");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
    console.log("clicked");

    card.classList.add("active");
});
closeShopping.addEventListener("click", () => {
    card.classList.remove("active");
});

let products = [
    {
        id: 1,
        name: "PRODUCT NAME 1",
        image: "1.PNG",
        price: 120
    },
    {
        id: 2,
        name: "PRODUCT NAME 2",
        image: "2.PNG",
        price: 120
    },
    {
        id: 3,
        name: "PRODUCT NAME 3",
        image: "3.PNG",
        price: 220
    },
    {
        id: 4,
        name: "PRODUCT NAME 4",
        image: "4.PNG",
        price: 123
    },
    {
        id: 5,
        name: "PRODUCT NAME 5",
        image: "5.PNG",
        price: 320
    },
    {
        id: 6,
        name: "PRODUCT NAME 6",
        image: "6.PNG",
        price: 120
    }

];

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
              <img src = "img/${value.image}">
              <div class = "title">${value.name}</div>
              <div class = "price">Rs. ${value.price.toLocaleString()}</div>
              <button onClick = "addToCard(${key})">Add to Card</button>
        `;
        list.appendChild(newDiv)
    })
}

initApp();

function addToCard(key) {
    if (listCard[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice += value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                   <button onClick = "changeQuantity(${key},${value.quantity - 1})">-</button>
                   <div class = "count">${value.quantity}</div>
                   <button onClick = "changeQuantity(${key},${value.quantity + 1})">+</button>
                </div>
            `
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}