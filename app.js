import { Navbar } from './components.js';
import { handleRouting } from './router.js';

console.log("App initializing..."); // Debugging log

// Load the Navigation Bar
document.getElementById('nav-container').innerHTML = Navbar();

// Listen for hash changes in the URL (when user clicks links)
window.addEventListener("hashchange", handleRouting);

// Load the correct view when the page first loads
window.addEventListener("DOMContentLoaded", handleRouting);