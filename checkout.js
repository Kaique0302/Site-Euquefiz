// checkout.js
document.addEventListener('DOMContentLoaded', () => {
    // Mock dos itens do carrinho
    const cartItems = [
        { id: 1, name: 'Topo de Bolo 1', price: 25.00, quantity: 1 },
        { id: 2, name: 'Topo de Bolo 2', price: 30.00, quantity: 2 },
    ];

    const cartList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `
            ${item.name} (R$${item.price.toFixed(2)} x ${item.quantity})
            <span class="badge badge-primary badge-pill">R$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartList.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);

    const paymentMethodSelect = document.getElementById('payment-method');
    const creditCardInfo = document.getElementById('credit-card-info');

    paymentMethodSelect.addEventListener('change', () => {
        if (paymentMethodSelect.value === 'credit-card') {
            creditCardInfo.classList.remove('d-none');
        } else {
            creditCardInfo.classList.add('d-none');
        }
    });

    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(checkoutForm);
        const paymentMethod = formData.get('payment-method');

        if (paymentMethod === 'credit-card') {
            const cardNumber = formData.get('card-number');
            const cardExpiry = formData.get('card-expiry');
            const cardCvc = formData.get('card-cvc');

            if (!cardNumber || !cardExpiry || !cardCvc) {
                alert('Por favor, preencha todos os dados do cartão de crédito.');
                return;
            }

            // Aqui você pode adicionar a lógica para processar o pagamento com cartão de crédito
        }

        // Simulação de confirmação da compra
        alert('Compra confirmada!');
    });
});
