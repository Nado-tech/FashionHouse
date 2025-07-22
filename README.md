
# FashionHouse Website

## Project Overview
FashionHouse is a modern web platform designed to showcase African-inspired fashion, blending heritage with contemporary trends. The site serves as a digital portfolio for a fashion house, featuring collections, events, galleries, and information about the team and board of trustees. The project is modular, maintainable, and scalable for future enhancements.

## Technologies Used
- **HTML5**: Semantic, accessible markup
- **CSS3**: External stylesheets for layout, design, and responsiveness
- **JavaScript (ES6+)**: Dynamic features, DOM manipulation, and interactivity

## Project Structure
```
FashionHouse/
├── html files/
│   ├── index.html                # Homepage
│   ├── about_us.html             # About Us
│   ├── collection.html           # Collection Overview
│   ├── Traditional.html          # Traditional Collection
│   ├── corporate.html            # Corporate Collection
│   ├── casual.html               # Casual Collection
│   ├── events.html               # Upcoming Events
│   ├── gallery.html              # Gallery
│   ├── board-of-trustees.html    # Board of Trustees
│   ├── contact.html              # Inquiries & Appointments
│   └── [product pages]           # e.g., N_shop.html, casual1_buy_shop.html, etc.
├── css/                          # All CSS files (external)
├── js/                           # JavaScript modules
├── Pictures/                     # Images, organized by type
└── README.md                     # Project overview
```

## Feature Overview
- **Dynamic Header, Navigation, and Footer**: Injected via JavaScript for consistency
- **Dropdown Navigation**: “Collections” menu (Traditional, Corporate, Casual)
- **Sticky Navigation Bar**: Persistent on scroll
- **Dynamic Marquee**: Rotating announcements on every page
- **Live Search Bar**: Suggestions and content highlighting
- **Dynamic Events System**: Paginated events with modal popups
- **Board of Trustees Cards**: Responsive cards with images and bios
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **No Manual Header/Footer**: All pages use JS injection for layout

## Technical Architecture
- **HTML**: Modular, semantic, and maintainable structure with descriptive classes/IDs
- **CSS**:
  - Page/section-specific stylesheets (e.g., about_us.css, events.css)
  - Shared styles in layout.css
  - BEM-like class naming, responsive with CSS Grid/Flexbox and media queries
- **JavaScript**:
  - Modular scripts (layout.js, header.js, footer.js, index.js, events.js)
  - Handles layout injection, navigation, search, events, modals, and marquee
  - Event-driven interactivity and dynamic DOM manipulation

## Main Pages & DOM Structure
All pages share a consistent structure:
```html
<body>
  <header id="main-header"></header> <!-- Injected: logo, nav, search, marquee -->
  <main>
    <!-- Page-specific content -->
  </main>
  <footer id="main-footer"></footer> <!-- Injected: about, contact, social -->
  <script src="../js/layout.js" type="module"></script>
  <!-- Additional page-specific scripts as needed -->
</body>
```
**Key Pages:**
- `index.html`: Homepage (hero, product showcase, events preview)
- `about_us.html`: About Us (brand philosophy, mission, vision)
- `collection.html`: Collection Overview (gallery of all collections)
- `Traditional.html`, `corporate.html`, `casual.html`: Collection pages (product grids)
- `events.html`: Upcoming Events (dynamic, with modals)
- `gallery.html`: Gallery (image grid)
- `board-of-trustees.html`: Board of Trustees (photos and bios)
- `contact.html`: Inquiries & Appointments (form and contact details)
- Additional product pages for individual items

## Assessment Compliance
This project meets all assessment requirements, including:
1. Consistent use of the “FashionHouse” name
2. Product showcase across homepage, collections, and product pages
3. Uniform navigation via JavaScript injection
4. Board of Trustees page with member details
5. Contact page with inquiry/appointment form
6. Dynamic events page with modals
7. Marquee announcements on all pages
8. JavaScript-driven interactivity on every page
9. All styling via external CSS
10. Documented and dynamic DOM structure

## Conclusion
FashionHouse is a comprehensive, assessment-compliant web project built with HTML, CSS, and JavaScript. It demonstrates modular design, dynamic content, and a professional approach to modern web development.


