export default function header () {
    const root = document.createElement('div');
    root.style.position = 'sticky';
    root.style.top = '0';
    root.style.zIndex = '50';

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

    // Get current page name to potentially customize message
    const currentPage = window.location.pathname.split('/').pop() || '';
    
    // Select a marquee message (you can customize this logic)
    let selectedMessage;
    if (currentPage.includes('sleek_shop')) {
      selectedMessage = marqueeMessages[1]; // Power looks better in silk
    } else if (currentPage.includes('Satin_shop')) {
      selectedMessage = marqueeMessages[2]; // Classic isn't old
    } else if (currentPage.includes('P_shop')) {
      selectedMessage = marqueeMessages[3]; // Real men tailor their legacy
    } else if (currentPage.includes('N_shop')) {
      selectedMessage = marqueeMessages[4]; // Hey there stylish human
    } else if (currentPage.includes('E_shop')) {
      selectedMessage = marqueeMessages[5]; // Own the moment
    } else if (currentPage.includes('C_shop')) {
      selectedMessage = marqueeMessages[6]; // Upgrade your wardrobe
    } else {
      // Default message for other pages
      selectedMessage = marqueeMessages[0];
    }
  
    root.innerHTML = `
      <header class="top-header">
      <a href="/" class="logo">Fashion House</a>
        <input type="text" id= "site-search" placeholder="I'm shopping for..." class="search-bar" autocomplete="off">
        <div id="search-dropdown" class="search-dropdown"></div>
        <div class="icons">
          <span>🔍</span>
          <span>🛒</span>
        </div>
      </header>
  
      <nav class="main-nav">
        <ul>
        <li><a href="/">Home</a></li>
          <li class="dropdown">
            <a href="/html files/collection.html">Collections</a>
            <ul class="dropdown-menu">
              <li><a href="/html files/Traditional.html">Traditional</a></li>
              <li><a href="/html files/formal.html">Formal</a></li>
              <li><a href="/html files/casual.html">Casual</a></li>
            </ul>
          </li>
          <li><a href="/html files/board-of-trustees.html">Board of Trustees</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/html files/events.html">Events</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>
      </nav>
      
      <marquee class="page-marquee" behavior="scroll" direction="left" scrollamount="8">
        ${selectedMessage}
      </marquee>
    `;
  
    document.body.insertAdjacentElement('afterbegin', root);
  }
  
  header()