document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: 1,
            name: 'Topo de Bolo 1',
            price: 'R$ 30,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            name: 'Topo de Bolo 2',
            price: 'R$ 35,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            name: 'Topo de Bolo 3',
            price: 'R$ 40,00',
            image: 'https://via.placeholder.com/150'
        }
        // Adicione mais produtos conforme necessário
    ];

    const productVitrine = document.getElementById('product-vitrine');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-4';

        productCard.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <a href="#" class="btn btn-primary" onclick="addToCart(${product.id})">Adicionar ao Carrinho</a>
                </div>
            </div>
        `;

        productVitrine.appendChild(productCard);
    });
});

function addToCart(productId) {
    // Função para adicionar o produto ao carrinho
    alert('Produto ' + productId + ' adicionado ao carrinho!');
}
