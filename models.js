const carModels={
    etron: [
        {
            name: "2024 e-tron® GT",
            image: "photos/2024e-tronGT.png",
            price: 106500
           
        },
        {
            name: "2024 RS e-tron® GT",
            image: "photos/2024AudiRSe-tronGT.png",
            price: 147100
        },
      
    ],
    Q8: [
        {
            name: "Audi Q8 e-tron",
            image: "photos/AudiQ8e-tron1.png",
            price: 74400
           
        },
        {
            name: "Audi Q8 Sportback e-tron®",
            image: "photos/capture1.png",
            price: 77800,
        
        },
        {
            name: "Audi SQ8 e-tron",
            image: "photos/Audi_SQ8-etron.png",
            price: 89800,
    
        },
      

    ],
    A5: [
        {
            name: "Audi A5 Coupe",
            image: "photos/AudiA5Coupe.png",
            price: 48400
           
        },
        {
            name: "Audi S5 Coupe",
            image: "photos/AudiS5Coupe.png",
            price: 57500
        },
        {
            name: "Audi A5 Cabriolet",
            image: "photos/A5Cabriolet.png",
            price: 55600
           
        },
        {
            name: "Audi S5 Cabriolet",
            image: "photos/AudiS5Cabriolet.png",
            price: 66100
        }
    ],

    A6: [
        {
            name: "Audi A6 Sedan",
            image: "photos/AudiA6Sedan.png",
            price: 58100
           
        },
        {
            name: "Audi S6 Sedan",
            image: "photos/AudiS6Sedan.png",
            price: 75500
        },
    ],

    A7: [
        {
            name: "Audi A7",
            image: "photos/AudiA7.png",
            price: 72000
           
        },
        {
            name: "Audi RS 7",
            image: "photos/AudiRS7.png",
            price: 127800
        },
    ],

    A8: [
        {
            name: "Audi S8",
            image: "photos/AudiS8.png",
            price: 123400
           
        },
       
    ],

    Q3: [
        {
            name:"Audi Q3 ",
            image: "photos/q3.png",
            price: 37400,
          
        }
      
    ],

    Q5: [
        {
            name: "Audi Q5 Sportback",
            image: "photos/q5.png",
            price: 52200
           
        },
        {
            name: "Audi SQ5 Sportback",
            image: "photos/sq5.png",
            price: 61100
        },
        
        
    ],

    Q7: [
        {
            name: "Audi Q7",
            image: "photos/AudiQ7.png",
            price: 59500
           
        },
        {
            name: "Audi SQ7",
            image: "photos/AudiSQ7.png",
            price: 90400
        },
    ],

    

    R8: [
        {
            name: "Audi R8",
            image: "photos/R8.png",
            price: 123400
           
        },
       
    ],

    TT: [
        {
            name: "Audi TT",
            image: "photos/Audi-TT.png",
            price: 123400
           
        },
       
    ],
    

};

function updateCarItems(category, container) {
    const carModelsList = container || document.getElementById("car-items");

    carModelsList.innerHTML = "";

    if (category === 'all') {
        
        const allItems = [];
        for (const categoryKey in carModels) {
            if (carModels.hasOwnProperty(categoryKey)) {
                allItems.push(...carModels[categoryKey]);
            }
        }

        for (let i = 0; i < allItems.length; i += 3) {
            const row = document.createElement("div");
            row.classList.add("car-row");

            for (let j = i; j < i + 3 && j < allItems.length; j++) {
                createMenuItem(allItems[j], row);
            }

            carModelsList.appendChild(row);
        }
    } else {
        
        const items = carModels[category];

        for (let i = 0; i < items.length; i += 3) {
            const row = document.createElement("div");
            row.classList.add("car-row");

            for (let j = i; j < i + 3 && j < items.length; j++) {
                createMenuItem(items[j], row);
            }

            carModelsList.appendChild(row);
        }
    }

    applySearchFuncionality();

    
    
}



function addNewCar(event) {
    event.preventDefault();


    const make = document.getElementById("make-input").value;
    const model = document.getElementById("model-input").value;
    const price = parseFloat(document.getElementById("price-input").value);
    const imageInput = document.getElementById("image-input");
    const image = imageInput.files.length > 0 ? URL.createObjectURL(imageInput.files[0]) : null;


    if (!make || !model || isNaN(price) || !image) {
        alert("Please fill in all the fields.");
        return;
    }


    const newCar = {
        name: `${make} ${model}`,
        price: price,
        description: `New car - ${make} ${model}`,
        ingredients: [make, model],
        image: image,
    };


    if (!carModels['all']) {
        carModels['all'] = [];
    }
    carModels['all'].push(newCar);


    updateCarItems('all');
    

    event.target.reset();
}




















function createMenuItem(item, container) {
    const li = document.createElement("li");
    const name = document.createElement("span");
    const price = document.createElement("span");
    const addButton = document.createElement("button");
    const image = document.createElement("img");

    name.textContent = item.name;
    price.textContent = `Price: $${item.price.toFixed(2)}`;
    addButton.textContent = "Add to cart";
    addButton.setAttribute("data-name", item.name);
    addButton.setAttribute("data-price", item.price.toFixed(2));

    addButton.addEventListener("click", addToCart);
    image.src = item.image; 
    image.alt = item.name;

    
   

    li.appendChild(name);
    li.appendChild(image);
    li.appendChild(price);
    li.appendChild(addButton);

    if (container) {
        container.appendChild(li);
    } else {
        const row = document.createElement("div");
        row.classList.add("car-row");
        row.appendChild(li);
        carModelsList.appendChild(row);
    }
}


function toggleCategoryButtons() {
    const categoryButtons = document.getElementById("category-buttons");
    const displayValue = categoryButtons.style.display === "none" ? "block" : "none";
    categoryButtons.style.display = displayValue;
}



document.getElementById("all-button").click();

document.addEventListener("DOMContentLoaded", function() {
    applyPriceFiltering();
    
});


document.addEventListener("DOMContentLoaded", function () {
    

    const carForm = document.getElementById("car-form");
    carForm.addEventListener("submit", addNewCar);
});





function applySearchFuncionality() {
    const searchInput = document.getElementById("search");
    const carModelsList = document.getElementById("car-items");
    const carModels = carModelsList.getElementsByTagName("li");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        
        Array.from(carModels).forEach((item) => {
            const itemName = item.querySelector("span:nth-child(1)").textContent.toLowerCase();

            if (itemName.includes(searchTerm)) { 
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
}



function applyPriceFiltering() {
    const minPriceInput = document.getElementById("price-filter-min");
    const maxPriceInput = document.getElementById("price-filter-max");
    const carModelsList = document.getElementById("car-items");
    const carModels = carModelsList.getElementsByTagName("li");

    
    minPriceInput.addEventListener("input", filterItems);
    maxPriceInput.addEventListener("input", filterItems);

    function filterItems() {
        const minPrice = parseFloat(minPriceInput.value) || 0;
        const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

        Array.from(carModels).forEach((item) => {
            const itemPrice = parseFloat(item.querySelector("span:nth-child(3)").textContent.slice(8)) || 0;

            if ((isNaN(minPrice) || itemPrice >= minPrice) && (isNaN(maxPrice) || itemPrice <= maxPrice)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    applyPriceFiltering();
});


    

function addToCart(event) {
    const itemName = event.target.getAttribute("data-name");
    const itemPrice = parseFloat(event.target.getAttribute("data-price")) || 0;

    const cartList = document.getElementById("basket-items");
    const li = document.createElement("li");
    const name = document.createElement("span");
    const price = document.createElement("span");
    const removeButton = document.createElement("button");
    const addButton = document.createElement("button");
    const itemImage = document.createElement("img");

    const selectedItem = findItemByName(itemName);


    name.textContent = itemName;
    price.textContent = `$${itemPrice.toFixed(2)}`;
    itemImage.src = selectedItem.image;
    itemImage.alt = itemName;

    removeButton.textContent = "-";
    addButton.textContent = "+";
    addButton.classList.add("add");
    removeButton.classList.add("remove");
    addButton.setAttribute("data-name", itemName);
    addButton.setAttribute("data-price", selectedItem.price.toFixed(2));

    removeButton.addEventListener("click", removeFromCart);
    addButton.addEventListener("click", addToCart);

   
    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(itemImage);
    li.appendChild(removeButton);
    li.appendChild(addButton);
    cartList.appendChild(li);

    calculateTotal();
    
}





function findItemByName(itemName) {
    for (const category in carModels) {
        const foundItem = carModels[category].find(item => item.name === itemName);
        if (foundItem) {
            return foundItem;
        }
    }
    return null; 
}

function updateCartItem(existingItem, itemPrice, quantity) {
    const newPrice = itemPrice * quantity;
    existingItem.querySelector("span:nth-child(1)").textContent = `${existingItem.dataset.name} x${quantity}`;
    existingItem.querySelector("span:nth-child(2)").textContent = `$${newPrice.toFixed(2)}`;

    calculateTotal();
}



































function removeFromCart(event){
    event.target.parentElement.remove();
 
    calculateTotal();
 
   
 }
 
 
 









 

 function updateCartItem(existingItem, itemPrice, quantity) {
    const newPrice = itemPrice * quantity;
    existingItem.dataset.quantity = quantity;
    existingItem.querySelector("span:nth-child(1)").textContent = `${existingItem.dataset.name} x${quantity}`;
    existingItem.querySelector("span:nth-child(2)").textContent = `$${newPrice.toFixed(2)}`;

    calculateTotal(); 
}

function calculateTotal(){
    const basketItems = document.querySelectorAll("#basket-items li");
    let subtotal = 0;
    let tax = 0;
    let total = 0;
    const taxRate= 0.18;

    basketItems.forEach((item) =>{
        const itemPrice = parseFloat(item.querySelector("span:nth-child(2)").textContent.slice(1));
        subtotal += itemPrice;
    });

    tax = subtotal * taxRate;
    total = subtotal + tax;

    document.querySelector("#subtotal-price").textContent = `${subtotal.toFixed(2)}`;
    document.querySelector("#tax-price").textContent = `${tax.toFixed(2)}`;
    document.querySelector("#totali-price").textContent = `${total.toFixed(2)}`;
}



const car = document.getElementById("car");
car.addEventListener("change" , updateCarItems);

updateCarItems();




const cartList = document.getElementById("basket-items");

cartList.addEventListener("click", (event) => {
if (event.target.classList.contains("add") || event.target.classList.contains("remove")){
calculateTotal();
}
});

calculateTotal();


