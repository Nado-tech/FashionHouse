# Changelog

## Updates by Idowu Joshua Oluwadamilare

### Branch Management & Synchronisation
- Updated the `main` branch .
- Forcefully reset the `Group-2` branch to match the `main` branch exactly.
- **Note:** Group-1 and Group-3 branches were not merged or updated.

### File and Directory Changes
- Removed old and redundant files; added new or updated files
- Renamed or moved files and images to more uniform directories (e.g., images moved to `Pictures/`, HTML files to `html files/`).

### Header & Footer Refactor
- Modularised header and footer code into `js/header.js` and `js/footer.js`.
- Created `js/layout.js` to inject the header.js and footer.js and index.js dynamically into all pages.
- I imported index.js to enable the search functionality for all pages
- Removed static header/footer HTML from individual pages to avoid duplication.
- Commented out the dropdown menu function in `index.js` and used only CSS hover for dropdowns, as the JavaScript and CSS approaches were conflicting with each other.

### CSS Improvements
- Created `css/layout.css` for shared header and footer styles.
- Added horizontal padding to the `.gallery` and `.events` sections in their respective CSS files to ensure content does not touch the screen edges.
- Made only the navigation bar sticky.
- Adjusted page CSS where necessary to resolve conflicts with header/footer styles.

### HTML & JS Clean-up
- Updated all HTML files to use only `layout.js` for header/footer injection.
- Cleaned up script imports to avoid duplicate execution.
- Updated the "Events" section in `index.html` for consistency with the events page.
- I Avoided adding or deleting content in web pages except for header/footer changes and necessary CSS adjustments.

### Gallery & About Pages
- Added a new `gallery.html` page with a responsive grid layout.
- Refactored and merged the "Meet the Team" and "Mission & Vision" sections into `about_us.html` with improved, namespaced CSS.
- Merged Ayo's and Ibrahim's About Us pages.
- Ibrahim (Abdulahim)'s Gallery Pages were not used, as they more closely resembled collection pages than a gallery.

### General Best Practices
- Improved modularity and maintainability by separating layout and content logic.
- Ensured all changes are well-documented in commit messages
- Each team member should cross-check and update their pages where necessary. Styles (e.g., text color, button color) should be consistent across all pages.

### Outstanding Tasks & Notes
- **The contact page functionality has not been tested.**
- **Board of Trustees images still need to be optimised/compressed once all images are available.**

### For Team Members Creating New Pages
- There is no need to create the header, footer, or marquee manually—simply import `layout.js`.

### GitHub Guide for Group Members

**To Pull Latest Changes:**
1. Open your terminal and make sure you are in the the project directory or press ctrl + ` if you are already in VS Code.
2. Run: `git pull origin [BRANCH-NAME]`

**To Push Your Changes:**
1. Stage your changes: `git add .`
2. Commit your changes: `git commit -m "Your commit message"`
3. Push to GitHub: `git push origin [BRANCH-NAME]`

**Note:**
- Always pull the latest changes before you start working and before you push your own changes to avoid conflicts.
- If you encounter any conflicts, resolve them locally before pushing.