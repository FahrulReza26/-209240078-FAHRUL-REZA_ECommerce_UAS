// js/script.js

// Navigasi antar section
function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Keranjang belanja
let cart = [];

// Fungsi Tambah ke Keranjang
function addToCart(id, nama, harga) {
  cart.push({ id, nama, harga });
  updateCart();
}

// Fungsi Beli Langsung
function buyNow(id, nama, harga) {
  alert(`Terima kasih telah membeli ${nama} seharga Rp ${harga.toLocaleString('id-ID')}`);
}

// Update Tampilan Keranjang
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = `${item.nama} - Rp ${item.harga.toLocaleString('id-ID')}`;
    cartItems.appendChild(itemDiv);
    total += item.harga;
  });

  cartTotal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
  cartCount.textContent = cart.length;
}
