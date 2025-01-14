document.addEventListener('DOMContentLoaded', function() {
    fetch('Keychron_Keyboards.xlsx')
        .then(response => response.arrayBuffer())
        .then(data => {
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const json = XLSX.utils.sheet_to_json(worksheet);
            displayProducts(json);
            setupCategoryFilter(json);
        })
        .catch(error => console.error('Error fetching the Excel file:', error));
});

function displayProducts(products) {
    const productContainer = document.querySelector('.product');
    productContainer.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const { Name, Price, Image, Category } = product;

        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.dataset.category = Category;

        productItem.innerHTML = `
            <img src="${Image}" alt="Product Image">
            <div class="middle"><div class="text">${Price} บาท</div></div>
            <h3>${Name}</h3>
            <p>ราคา: ${Price} บาท</p>
            <div class="price-cart-container">
                <button onclick="addToCart('${Name}', '${Price}', '${Image}')">เพิ่มในตะกร้า</button>
            </div>
        `;

        productContainer.appendChild(productItem);
    });
}

function setupCategoryFilter(products) {
    const categorySelect = document.getElementById('category-select');
    categorySelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        filterProductsByCategory(selectedCategory, products);
    });
}

function filterProductsByCategory(category, products) {
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

let cart = [];

function addToCart(name, price, image) {
    price = price.toString().replace(/,/g, ''); // แปลง price เป็นสตริงและลบเครื่องหมายจุลภาค
    cart.push({ name, price: parseFloat(price), image });
    console.log(`${name} ถูกเพิ่มในตะกร้า`);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElem = document.getElementById('total-price');

    cartList.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.style.listStyle = 'none';

        const img = document.createElement('img');
        img.src = item.image;
        img.style.width = '50px';
        img.style.height = '50px';
        img.style.marginRight = '10px';

        const text = document.createTextNode(`${item.name} - ${item.price} บาท`);
        li.appendChild(img);
        li.appendChild(text);
        cartList.appendChild(li);

        totalPrice += item.price;
    });

    totalPriceElem.textContent = `รวม: ${totalPrice} บาท`;
}

function showCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'block';
}

function closeCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'none';
}

function clearCart() {
    cart = [];
    updateCart();
}

function checkout() {
    generateQRCode();
    cart = [];
    updateCart();
}

function generateQRCode() {
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ''; // ล้าง QR code เก่า
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    QRCode.toCanvas(qrcodeContainer, `ชำระเงินจำนวน: ${totalPrice} บาท`, function (error) {
        if (error) console.error(error);
        console.log('QR code generated!');
    });
}

// เพิ่ม event listener ให้กับปุ่ม view-cart
document.getElementById('view-cart').addEventListener('click', showCart);

// เพิ่ม event listener เพื่อปิด modal
document.querySelector('.close').addEventListener('click', closeCart);

// ปิด modal เมื่อคลิกนอก modal
window.addEventListener('click', function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});