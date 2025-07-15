export default function footer() {
  const root = document.createElement('footer');
  root.className = 'footer';
  root.innerHTML = `
    <div id="about">
      <h3>About Us</h3>
      <p>We are a creative fashion house blending African heritage with modern trends.</p>
      <a href="../html files/about_us.html" class="about-link">Learn More</a>
    </div>
    <div id="contact">
      <h3>Contact Us</h3>
      <p>Phone: +123-456-7890<br>Email: contact@yourbrand.com<br>Location: Lagos, Nigeria</p>
    </div>
  `;
  document.body.appendChild(root);
} 