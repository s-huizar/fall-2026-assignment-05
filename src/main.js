import data from "../src/data/products.json" with {type: "json"}

// Pagination variable
let currentPage = 1;
const itemsPerPage = 5;

//creates function
function renderProducts() {
    const container = document.getElementsById("product-container");
    container.innerHTML = ""; //clears the existing cards

    //calc slice indices per current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = productsData.slice(startIndex, endIndex);

    //create html for each product on page dynamically
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <div class="price">${product.price}</div>
    <p>${product.description}</p>
    `;
    
    container.appendChild(card);

    updatePaginationControls();
}
function updatePaginationControls() {
    const totalPages = Math.ceil(productsData.length/itemsPerPage);
    
    document.getElementById("page-info").textContent = `Page${currentPage} of ${totalPages}`;
    document.getElementById("prev-btn").disabled = currentPage === 1;
    document.getElementById("next-btn").disabled = currentPage === totalPages || totalPages == 0;
}
function changePage(direction) {
    currentPage += direction;
    renderProducts();
}