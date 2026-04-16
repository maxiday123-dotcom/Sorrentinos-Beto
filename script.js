document.addEventListener('DOMContentLoaded', function() {
    let quantity = 12;
    const maxQuantity = 120;
    const pricePer12 = 2400;
    
    const qtyDisplay = document.getElementById('qty-display');
    const priceDisplay = document.getElementById('price-display');
    const qtyMinus = document.getElementById('qty-minus');
    const qtyPlus = document.getElementById('qty-plus');
    const whatsappBtn = document.getElementById('whatsapp-btn');
    
    // Update displays
    function updateDisplays() {
        qtyDisplay.textContent = quantity;
        const totalPrice = (quantity / 12) * pricePer12;
        priceDisplay.textContent = totalPrice.toLocaleString('es-AR');
    }
    
    // Quantity controls
    qtyMinus.addEventListener('click', function() {
        if (quantity > 12) {
            quantity -= 12;
            updateDisplays();
        }
    });
    
    qtyPlus.addEventListener('click', function() {
        if (quantity < maxQuantity) {
            quantity += 12;
            updateDisplays();
        }
    });
    
    // WhatsApp order
    whatsappBtn.addEventListener('click', function() {
        const checkboxes = document.querySelectorAll('.flavor-checkbox input:checked');
        const flavors = Array.from(checkboxes).map(cb => cb.value).join(', ');
        
        let message = `Hola Beto! Quiero pedir:\n\n`;
        message += `📦 Cantidad: ${quantity} sorrentinos\n`;
        message += `💰 Total: $${(quantity / 12 * pricePer12).toLocaleString('es-AR')}\n`;
        
        if (flavors) {
            message += `🍝 Gustos: ${flavors}\n`;
        } else {
            message += `🍝 Por favor recomendame los mejores gustos\n`;
        }
        
        message += `\n¡Gracias! 😊`;
        
        const phone = '1128795554';
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('
