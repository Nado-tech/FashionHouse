const events = [
    { id: 1, title: "Spring Collection Fashion Show", date: "August 15, 2025 • 7:00 PM", desc: "Experience our latest spring collection with live runway presentations featuring our top designers and models.", fullDesc: "Join us for an unforgettable evening showcasing our Spring 2025 collection. This exclusive fashion show will feature over 50 stunning pieces from our top designers, including traditional African prints reimagined for modern wardrobes. The event includes a champagne reception and live music performances.", loc: "Lagos Fashion Week Venue, Victoria Island", img: "../Pictures/events/spring-fall-collection.jpg", cat: "Fashion Show" },
    { id: 2, title: "African Fashion Exhibition", date: "July 20, 2025 • 10:00 AM - 6:00 PM", desc: "A celebration of African heritage through contemporary fashion design. Meet designers and explore unique pieces.", fullDesc: "Immerse yourself in the rich tapestry of African fashion at our comprehensive exhibition. Discover over 200 pieces spanning from traditional ceremonial wear to cutting-edge contemporary designs. The exhibition features interactive workshops and designer talks.", loc: "National Museum, Lagos", img: "../Pictures/events/africa-fashion-exhibition.png", cat: "Exhibition" },
    { id: 3, title: "Style & Confidence Workshop", date: "January 25, 2025 • 2:00 PM", desc: "Learn styling tips from fashion experts and discover how to build confidence through personal style.", fullDesc: "Transform your personal style and boost your confidence in this comprehensive workshop led by industry experts. Learn color theory, body shape analysis, and styling techniques for different occasions. Participants will receive a personalized style consultation and take-home styling guide.", loc: "Fashion House Studio, Ikeja", img: "../Pictures/events/style-and-confidence-workshop.jpg", cat: "Workshop" },
    { id: 4, title: "Designer Meet & Greet", date: "November 10, 2024 • 4:00 PM", desc: "Meet our talented designers and get exclusive insights into their creative process and upcoming collections.", fullDesc: "Get up close and personal with our award-winning designers in this intimate meet and greet session. Learn about their creative journey, design philosophy, and upcoming collections. The event includes Q&A sessions and exclusive previews of new designs.", loc: "Fashion House Gallery, Victoria Island", img: "../Pictures/events/designer-meet-and-greet.jpg", cat: "Meet & Greet" }
];

let page = 1;
const grid = document.querySelector('.events-grid');
const pagination = document.querySelector('.pagination');

function render() {
    const start = (page - 1) * 2;
    const end = start + 2;
    const eventsToShow = events.slice(start, end);

    grid.innerHTML = eventsToShow.map(event => `
    <div class="event-item" onclick="showModal(${event.id})">
      <img src="${event.img}" alt="${event.title}" class="event-image">
      <div class="event-details">
        <h3>${event.title}</h3>
        <div class="event-date">${event.date}</div>
        <div class="event-location">${event.loc}</div>
      </div>
    </div>
  `).join('');

    renderPagination();
}

function renderPagination() {
    const totalPages = Math.ceil(events.length / 2);
    pagination.innerHTML = '';

    if (page > 1) pagination.innerHTML += '<button class="pagination-btn" onclick="changePage(' + (page - 1) + ')">← Previous</button>';

    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `<button class="pagination-btn ${i === page ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }

    if (page < totalPages) pagination.innerHTML += '<button class="pagination-btn" onclick="changePage(' + (page + 1) + ')">Next →</button>';
}

function changePage(newPage) {
    page = newPage;
    render();
}

function showModal(id) {
    const event = events.find(e => e.id === id);
    const modal = document.createElement('div');
    modal.className = 'event-modal';
    modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn" onclick="this.parentElement.parentElement.remove()">&times;</span>
      <img src="${event.img}" alt="${event.title}" class="modal-image">
      <div class="modal-details">
        <h2>${event.title}</h2>
        <div class="event-date">${event.date}</div>
        <p class="event-description">${event.fullDesc}</p>
        <div class="event-location">${event.loc}</div>
        <div class="event-category">Category: ${event.cat}</div>
      </div>
    </div>
  `;

    document.body.appendChild(modal);
    modal.onclick = e => e.target === modal && modal.remove();
}

document.addEventListener('DOMContentLoaded', render); 