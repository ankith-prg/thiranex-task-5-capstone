export const Navbar = () => `
    <nav>
        <div class="brand">KICKS</div>
        <div class="nav-links">
            <a href="#/">Shop</a>
            <a href="#/cart">Cart (0)</a>
        </div>
    </nav>
`;

export const Catalog = () => `
    <h1>Latest Arrivals</h1>
    <div class="product-grid">
        <div class="product-card">
            <h2>Air Phantom 1</h2>
            <div class="price">$150.00</div>
            <button>Add to Cart</button>
        </div>
        <div class="product-card">
            <h2>Runner Ultra Boost</h2>
            <div class="price">$180.00</div>
            <button>Add to Cart</button>
        </div>
        <div class="product-card">
            <h2>Classic Retro Low</h2>
            <div class="price">$95.00</div>
            <button>Add to Cart</button>
        </div>
    </div>
`;

export const Cart = () => `
    <h1>Your Shopping Cart</h1>
    <div class="product-card" style="margin-top: 2rem;">
        <p>Your cart is empty.</p>
        <button onclick="window.location.hash='#/'" style="max-width: 200px; margin-top: 1rem;">Continue Shopping</button>
    </div>
`;