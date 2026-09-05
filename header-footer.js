/* =========================================================
   SB CAD STUDIO — SHARED HEADER & FOOTER
   Injected on every page so header/footer stay identical.
   Active nav link is set via body[data-page] attribute.
========================================================= */
(function () {
  var WHATSAPP_NUMBER = "91900000000"; // no + / spaces for wa.me link
  var WHATSAPP_DISPLAY = "+91 900000000";
  var EMAIL = "inquiry@sbcadstudio.com";

  var HEADER_HTML = `
  <div class="topbar">
    <div class="container">
      <div class="topbar-links">
        <a href="mailto:${EMAIL}"><i class="fa-regular fa-envelope"></i><span>${EMAIL}</span></a>
        <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i><span class="hide-xs hide-md">${WHATSAPP_DISPLAY}</span></a>
        <a href="#"><i class="fa-regular fa-clock"></i><span class="hide-xs hide-md">Mon - Sat, 9:00 AM - 7:00 PM IST</span></a>
      </div>
      <div class="topbar-social">
        <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="#" aria-label="Pinterest"><i class="fa-brands fa-pinterest-p"></i></a>
      </div>
    </div>
  </div>

  <header class="site-header" id="siteHeader">
    <div class="container header-inner">
      <a href="index.html" class="brand">
        <span class="mark">SB</span>
        <span>SB Cad Studio<small>Shop Drawings &amp; 3D Visualization</small></span>
      </a>

      <nav class="main-nav" id="mainNav">
        <ul>
          <li><a href="index.html" data-nav="home">Home</a></li>
          <li><a href="about.html" data-nav="about">About</a></li>
          <li><a href="projects.html" data-nav="projects">Projects</a></li>
          <li><a href="gallery.html" data-nav="gallery">Gallery</a></li>
          <li><a href="blogs.html" data-nav="blogs">Blogs</a></li>
          <li><a href="contact.html" data-nav="contact">Contact</a></li>
        </ul>
      </nav>

      <div class="header-cta">
        <div class="call-badge">
          <i class="fa-solid fa-headset"></i>
          <div>
            <span class="lbl">Call / WhatsApp</span>
            <span class="val">${WHATSAPP_DISPLAY}</span>
          </div>
        </div>
        <a href="contact.html" class="btn btn-primary btn-sm">Get a Quote</a>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`;

  var FOOTER_HTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="brand">
            <span class="mark">SB</span>
            <span>SB Cad Studio</span>
          </a>
          <p>SB Cad Studio delivers precise architectural, structural, MEP and joinery shop drawings plus photorealistic 3D design and rendering for clients across India and the Gulf.</p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="index.html"><i class="fa-solid fa-angle-right"></i>Home</a></li>
            <li><a href="about.html"><i class="fa-solid fa-angle-right"></i>About Us</a></li>
            <li><a href="projects.html"><i class="fa-solid fa-angle-right"></i>Projects</a></li>
            <li><a href="gallery.html"><i class="fa-solid fa-angle-right"></i>Gallery</a></li>
            <li><a href="blogs.html"><i class="fa-solid fa-angle-right"></i>Blogs</a></li>
            <li><a href="contact.html"><i class="fa-solid fa-angle-right"></i>Contact</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Our Services</h4>
          <ul class="footer-links">
            <li><a href="projects.html"><i class="fa-solid fa-angle-right"></i>Architectural Shop Drawings</a></li>
            <li><a href="projects.html"><i class="fa-solid fa-angle-right"></i>Joinery &amp; Millwork Drawings</a></li>
            <li><a href="projects.html"><i class="fa-solid fa-angle-right"></i>MEP Coordination Drawings</a></li>
            <li><a href="projects.html"><i class="fa-solid fa-angle-right"></i>3D Modeling &amp; Rendering</a></li>
            <li><a href="projects.html"><i class="fa-solid fa-angle-right"></i>Walkthroughs &amp; Animation</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Get In Touch</h4>
          <ul class="footer-contact">
            <li><i class="fa-solid fa-location-dot"></i><span>Serving clients across India &amp; the Gulf (UAE, KSA, Qatar, Oman, Kuwait, Bahrain) — remote-first studio</span></li>
            <li><i class="fa-solid fa-envelope"></i><span><a href="mailto:${EMAIL}">${EMAIL}</a></span></li>
            <li><i class="fa-brands fa-whatsapp"></i><span><a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener">${WHATSAPP_DISPLAY}</a></span></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; <span id="footerYear"></span> SB Cad Studio. All rights reserved.</p>
        <p><a href="#">Privacy Policy</a> &nbsp;|&nbsp; <a href="#">Terms of Service</a></p>
      </div>
    </div>
  </footer>

  <div class="fab-stack">
    <button class="fab fab-top" id="fabTop" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>
    <a class="fab fab-whatsapp" href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
  </div>`;

  document.write('<div id="site-header-placeholder">' + HEADER_HTML + '</div>');
  document.write('<div id="site-footer-placeholder-marker"></div>');

  window.__SBCAD_FOOTER_HTML__ = FOOTER_HTML;
})();
