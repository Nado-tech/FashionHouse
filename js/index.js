function highlightSearch(query) {
  document.querySelectorAll('.search-highlight').forEach(el => {
    el.outerHTML = el.innerText;
  });

  if (!query) return;

  // Search in all text nodes inside main content (excluding nav, header, footer, scripts)
  query = query.toLowerCase();
  const mainContent = document.body.querySelectorAll('section, .showcase, .event-box, .showcase-card');
  mainContent.forEach(section => {
    section.querySelectorAll('*').forEach(node => {
      if (node.children.length === 0 && node.textContent.trim()) {
        const text = node.textContent;
        if (text.toLowerCase().includes(query)) {
          node.innerHTML = text.replace(
            new RegExp(`(${query})`, 'ig'),
            '<span class="search-highlight">$1</span>'
          );
        }
      }
    });
  });
}

const searchInput = document.getElementById('site-search');
const searchDropdown = document.getElementById('search-dropdown');

function getSearchableItems() {
  const items = [];
  document.querySelectorAll('h2, h3, p, .event-box, .showcase-card').forEach(el => {
    const text = el.textContent.trim();
    if (text) items.push({ text, el });
  });
  return items;
}

searchInput.addEventListener('input', function() {
  const query = this.value.trim().toLowerCase();
  searchDropdown.innerHTML = '';
  if (!query) {
    searchDropdown.style.display = 'none';
    return;
  }
  const items = getSearchableItems();
  const matches = items.filter(item => item.text.toLowerCase().includes(query));
  if (matches.length === 0) {
    searchDropdown.style.display = 'none';
    return;
  }
  matches.slice(0, 8).forEach(item => {
    const div = document.createElement('div');
    div.className = 'dropdown-item';
    div.innerHTML = item.text.replace(
      new RegExp(`(${query})`, 'ig'),
      '<span class="search-highlight">$1</span>'
    );
    div.onclick = () => {
      item.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      searchDropdown.style.display = 'none';
    };
    searchDropdown.appendChild(div);
  });
  searchDropdown.style.display = 'block';
});

document.addEventListener('click', function(e) {
  if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
    searchDropdown.style.display = 'none';
  }
});

//searchBtn.addEventListener('click', function() {
  //highlightSearch(searchInput.value.trim().toLowerCase());
//});

searchInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    highlightSearch(searchInput.value.trim().toLowerCase());
  }
});

const heroSection = document.querySelector('.hero h1');

if (document.contains(heroSection)) {
  heroSection.textContent = "Welcome to Fashion House!";

}


document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.dropdown');
  const menu = dropdown.querySelector('.dropdown-menu');
  const link = dropdown.querySelector('a');

  menu.style.display = 'none'; 

  link.addEventListener('click', function(e) {
    e.preventDefault();
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  });


  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      menu.style.display = 'none';
    }
  });
});