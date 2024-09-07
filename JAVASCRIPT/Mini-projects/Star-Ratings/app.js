document.addEventListener("DOMContentLoaded", () => {
    const datContainer = document.getElementById("data-container");

    const data = [
        { id: 1, name: "product1", rating: 4 },
        { id: 2, name: "product2", rating: 2 },
        { id: 3, name: "product3", rating: 5 },
        { id: 4, name: "product4", rating: 3 },
    ];

    const displayData = (data) => {
        data.forEach(item => {
            
            const itemContainer = document.createElement("div");
            const itemName = document.createElement('h3');
            itemName.textContent = item.name;

            const starsContainer = document.createElement("div");
            for(let i = 0; i<5; i++) {
                const star = document.createElement('span');
                star.classList.add("star");
                star.textContent = i < item.rating ? '★' : '☆';
                if(i >= item.rating) star.classList.add('empty-star');
                starsContainer.appendChild(star);
            }

            itemContainer.appendChild(itemName);
            itemContainer.appendChild(starsContainer);
            datContainer.appendChild(itemContainer);

        });
    };
    displayData(data)
});