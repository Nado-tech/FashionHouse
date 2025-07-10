# Events Page - Simple Guide

## What is this?
The Events page shows upcoming fashion events like fashion shows, exhibitions, and workshops. Users can browse events and click to see more details.

## How it works
- Shows 2 events per page (4 total events)
- Click any event to see full details
- Use Previous/Next buttons to browse all events
- Works on mobile phones and computers

## Files to know about
- `events.html` - The main page
- `events.js` - Contains the event information
- `index.css` - The styling (looks for "Events Page Styles" comment)

## External Dependencies
- **Google Fonts**: Outfit font family for text(Already Exits in index.html)
- **Material Icons**: Google Material Icons for date and location icons
  ```html
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  ```

## Page Structure (DOM Tree)
```
<body>
├── <header class="top-header">          <!-- Site header with logo and search -->
│   ├── <div class="logo">Fashion House</div>
│   └── <div class="icons"></div>
│
├── <nav class="main-nav">               <!-- Navigation menu -->
│   └── <ul>
│       ├── <li class="dropdown">        <!-- Dropdown menu for Collections -->
│       │   ├── <a href="#">Collections</a>
│       │   └── <ul class="dropdown-menu">
│       │       ├── <li><a href="#traditional">Traditional</a></li>
│       │       ├── <li><a href="formal.html">Formal</a></li>
│       │       └── <li><a href="#casual">Casual</a></li>
│       │       </ul>
│       │   </li>
│       ├── <li><a href="#">Board of Trustees</a></li>
│       ├── <li><a href="#about">About Us</a></li>
│       ├── <li><a href="#contact">Contact</a></li>
│       ├── <li><a href="events.html">Events</a></li>
│       └── <li><a href="#gallery">Gallery</a></li>
│       </ul>
│
├── <section class="events-hero">        <!-- Hero section with title -->
│   ├── <h1>Events</h1>
│   └── <p>Description</p>
│
├── <div class="events-container">       <!-- Main events area -->
│   ├── <div class="events-grid">        <!-- Grid for event cards -->
│   │   └── <!-- JavaScript adds event cards here -->
│   │       <div class="event-item" onclick="showModal(id)">
│   │           ├── <img class="event-image" src="...">
│   │           └── <div class="event-details">
│   │               ├── <h3>Event Title</h3>
│   │               ├── <div class="event-date">Date</div>
│   │               └── <div class="event-location">Location</div>
│   │               </div>
│   │           </div>
│   │
│   └── <div class="pagination">         <!-- Pagination controls -->
│       └── <!-- JavaScript adds pagination buttons here -->
│       </div>
│
└── <footer class="footer">              <!-- Site footer -->
    ├── <div id="about">
    │   ├── <h3>About Us</h3>
    │   └── <p>Description</p>
    │   </div>
    └── <div id="contact">
        ├── <h3>Contact Us</h3>
        └── <p>Contact details</p>
        </div>
    </footer>
</body>
```

## JavaScript Code
The page uses `events.js` to:
- **Load events**: Reads event data from JSON array
- **Display events**: Creates event cards in the grid (2 per page)
- **Show pagination**: Adds Previous/Next buttons
- **Open modals**: When you click an event, shows detailed information
- **Handle navigation**: Changes pages when you click pagination buttons

## Adding new events
1. Open `events.js`
2. Find the `events` array
3. Add a new event like this:
```javascript
{
  id: 5,
  title: "Your Event Name",
  date: "Date • Time",
  desc: "Short description",
  fullDesc: "Long detailed description",
  loc: "Location",
  img: "your-image.jpg",
  cat: "Category"
}
```
4. Add your event image to the `Pictures/events/` folder

## CSS Modifications Made
To fix mobile responsiveness issues, these existing properties in `index.css` were modified:

### CSS Code Location
All events page CSS is located in `index.css` between these comments:
```css
/* Events Page Styles */
/* ... all events CSS code ... */
/* Events Page Styles End */
```

### Properties That Override Others
1. **`.dropdown` position**: `position: relative !important` - Overrides default positioning to ensure dropdown menus work properly
2. **`.dropdown-menu` display**: `display: none !important` - Forces dropdown to be hidden by default, then shows on hover
3. **`.dropdown-menu` position**: `position: absolute !important` - Ensures dropdown appears below parent element

### Additional Mobile Improvements
- **`.main-nav ul` flex-wrap**: Added `flex-wrap: wrap` to allow navigation items to wrap on mobile instead of overflowing

### Why These Overrides Were Needed
- **Dropdown issues**: Original CSS had conflicting positioning that broke dropdown functionality
- **Mobile overflow**: Navigation items were extending beyond screen width on mobile

## Note about Homepage
The main homepage (`index.html`) is not fully responsive for mobile devices and loads slowly. I think we still need to compress the images again.

---
**Last Updated**: 11/07/2025
**Version**: 1.0
