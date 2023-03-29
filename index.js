// Write your code here...
const URL = "http://localhost:3000/menu";
// Variables for "Menu"
const menuSection = document.getElementById("menu");
const menuItems = document.getElementById("menu-items");
// Variables for "Dish"
const dishSection = document.getElementById("dish");
const dishText = document.getElementById("dish-text");
const dishIMG = document.getElementById("dish-image");
const dishName = document.getElementById("dish-name");
const dishDescription = document.getElementById("dish-description");
const dishPrice = document.getElementById("dish-price");
// Variables for "Cart"
const cartForm = document.getElementById('cart-form');
const cartNumber = document.getElementById('number-in-cart');
const cartAmount = document.getElementById('cart-amount');
// Fetch request
fetch(URL).then((response) => response.json()).then((data) => {
    console.log(data);
    renderMenu(data);
    defaultDish(data[0]);
})
// Function that renders array
const renderMenu = items => {
    items.forEach(item => {
        // Renders out menu as individual spans with info and appends them to "menu-item" div
        const menuSpan = document.createElement("span");
        menuSpan.textContent = item.name;
        // creates eventlistener for each item from array
        menuSpan.addEventListener('click', (e) => {
            // dishSection.textContent = item.name;
            dishText.textContent = item.name
            dishName.textContent = item.name;
            dishIMG.src = item.image;
            dishDescription.textContent = item.description;
            dishPrice.textContent = item.price;
            console.log(`Clicked ${item.name}`)
        })
        menuItems.append(menuSpan);
    })
}
// Sets the first item as the page loads with description and item
const defaultDish = (item) => {
    // dishSection.textContent = item.name;
    dishText.textContent = item.name;
    dishName.textContent = item.name;
    dishDescription.textContent = item.description;
    dishPrice.textContent = item.price;
    dishIMG.src = item.image;
};

cartForm.addEventListener('submit',(e) => {
    e.preventDefault()
    cartNumber.textContent = parseInt(cartNumber.textContent) + parseInt(e.target['cart-amount'].value)
    console.log(cartAmount.textContent);
});