export default function header () {
  const root = document.createElement('div');
  root.style.position = 'sticky';
  root.style.top = '0';
  root.style.zIndex = '50';

  root.innerHTML = `
    <header class="top-header">
      <div class="logo">Fashion House</div>
      <input type="text" id= "site-search" placeholder="I'm shopping for..." class="search-bar" autocomplete="off">
      <div id="search-dropdown" class="search-dropdown"></div>
      <div class="icons">
        <span>🔍</span>
        <span>🛒</span>
      </div>
    </header>

    <nav class="main-nav">
      <ul>
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
  `;

  document.body.insertAdjacentElement('afterbegin', root);
}

header()