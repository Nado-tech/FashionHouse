export default function header () {
    // Remove wrapper div, inject header, nav, and marquee directly
    const headerEl = document.createElement('header');
    headerEl.className = 'top-header';
    headerEl.innerHTML = `
      <a href="/" class="logo">Fashion House</a>
      <input type="text" id= "site-search" placeholder="I'm shopping for..." class="search-bar" autocomplete="off">
      <div id="search-dropdown" class="search-dropdown"></div>
      <div class="icons">
        <span>🔍</span>
        <span>🛒</span>
      </div>
    `;

    const navEl = document.createElement('nav');
    navEl.className = 'main-nav';
    navEl.innerHTML = `
      <ul>
        <li><a href="/">Home</a></li>
        <li class="dropdown">
          <a href="/html files/collection.html">Collections</a>
          <ul class="dropdown-menu">
            <li><a href="/html files/Traditional.html">Traditional</a></li>
            <li><a href="/html files/corporate.html">Corporate</a></li>
            <li><a href="/html files/casual.html">Casual</a></li>
          </ul>
        </li>
        <li><a href="/html files/board-of-trustees.html">Board of Trustees</a></li>
        <li><a href="/html files/about_us.html">About Us</a></li>
        <li><a href="/html files/contact.html">Contact</a></li>
        <li><a href="/html files/events.html">Events</a></li>
        <li><a href="/html files/gallery.html">Gallery</a></li>
      </ul>
    `;

    const marqueeEl = document.createElement('marquee');
    marqueeEl.className = 'page-marquee';
    marqueeEl.setAttribute('behavior', 'scroll');
    marqueeEl.setAttribute('direction', 'left');
    marqueeEl.setAttribute('scrollamount', '8');

    // Array of different marquee messages
    const marqueeMessages = [
      "🔥 Upcoming: Runway Show - August 10th  | 🎉 New Navy Blue Dinner Jacket in stock now! | ✨ Free shipping on orders over ₦100,000",
      "Power looks better in silk •  You never get a second chance at a first impression.",
      "Classic isn't old — it's timeless • Elegance is always in style • Your presence should arrive before you speak.",
      "Real men tailor their legacy • From day to night, let your style do the talking.",
      "Hey there stylish human — welcome to the world of bold fits & soft drips 💼✨",
      "Own the moment in tailored elegance • From day to night, let your style do the talking |✨ Members-only sale coming soon •",
      "Upgrade your wardrobe! Get 10% off all classic suits this month. Dress sharp, feel sharper."
    ];
    const currentPage = (window.location.pathname.split('/').pop() || '').toLowerCase();
    let selectedMessage;
    if (currentPage.includes('sleek_shop')) {
      selectedMessage = marqueeMessages[1];
    } else if (currentPage.includes('satin_shop')) {
      selectedMessage = marqueeMessages[2];
    } else if (currentPage.includes('s_shop')) {
      selectedMessage = marqueeMessages[3];
    } else if (currentPage.includes('n_shop')) {
      selectedMessage = marqueeMessages[4];
    } else if (currentPage.includes('e_shop')) {
      selectedMessage = marqueeMessages[5];
    } else if (currentPage.includes('c_shop')) {
      selectedMessage = marqueeMessages[6];
    } else {
      selectedMessage = marqueeMessages[0];
    }
    marqueeEl.textContent = selectedMessage;

    // Inject directly into body
    document.body.insertAdjacentElement('afterbegin', marqueeEl);
    document.body.insertAdjacentElement('afterbegin', navEl);
    document.body.insertAdjacentElement('afterbegin', headerEl);
}