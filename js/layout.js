const layoutCssLink = document.createElement('link');
layoutCssLink.rel = 'stylesheet';
layoutCssLink.href = '../css/layout.css'; // Adjust path if needed
document.head.appendChild(layoutCssLink);

import header from './header.js';
import footer from './footer.js';
import '../js/index.js';

header();
footer(); 