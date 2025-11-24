fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data);
    displayData(data.data);
});

function displayData(data) {
  const productSec = document.querySelector('.product-sec');
  data.forEach( product => {
    console.log(product);
    let productCard = `
    <div class='product-sec__card' id='${product.id}'>
      <img src='${product.attributes.img_url}' alt='${product.attributes.name}'>
      <h2>${product.attributes.name}</h2>
      <p>$${product.attributes.price.toFixed(2)}</p>
      <p>${product.attributes.description}</p>
    </div>
    `;
    productSec.insertAdjacentHTML('beforeend', productCard);
  });
}

function openNav() {
  document.getElementById('mobile-nav').style.width = '250px';
}

function closeNav() {
  document.getElementById('mobile-nav').style.width = '0';
}