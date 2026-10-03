import { Catalog, Cart } from './components.js';

const routes = {
    '': Catalog,
    '#/': Catalog,
    '#/cart': Cart
};

export const handleRouting = () => {
    let currentHash = window.location.hash;
    console.log("Navigating to:", currentHash || "Home"); // Debugging log
    
    if (currentHash === '') {
        currentHash = '#/';
    }
    
    const viewToRender = routes[currentHash] || (() => `<h1>404 - Not Found</h1>`);
    document.getElementById('app-root').innerHTML = viewToRender();
};