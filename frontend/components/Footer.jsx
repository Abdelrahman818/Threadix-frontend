import Link from "next/link";
import AdminLink from "./AdminLink";

const Footer = ({ isAdmin }) => {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <AdminLink />
          </ul>
        </div>

        {/* Newsletter Subscribe */}
        <div className="footer-section">
          <h4>Subscribe</h4>
          <p>Get updates about our latest drops and offers!</p>
          <form className="subscribe-form">
            <button className="btn-primary" type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h3l-.5 3h-2.5v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.8.4 4 .7c-.9.3-1.6.7-2.3 1.3C1.2 2.9.8 3.6.5 4.5.2 5.3 0 6.2 0 7c-.1 1.3-.1 1.7-.1 5s0 3.6.1 5c.1.8.3 1.7.5 2.5.3.9.7 1.6 1.3 2.3.7.7 1.4 1 2.3 1.3.8.2 1.7.4 2.5.5 1.3.1 1.7.1 5 .1s3.6 0 5-.1c.8-.1 1.7-.3 2.5-.5.9-.3 1.6-.7 2.3-1.3.7-.7 1-1.4 1.3-2.3.2-.8.4-1.7.5-2.5.1-1.3.1-1.7.1-5s0-3.6-.1-5c-.1-.8-.3-1.7-.5-2.5-.3-.9-.7-1.6-1.3-2.3C20.1.8 19.4.5 18.5.2c-.8-.2-1.7-.4-2.5-.5C15.6 0 15.2 0 12 0z"/>
                <path d="M12 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.2A4 4 0 1 1 16 12 4 4 0 0 1 12 16z"/>
                <circle cx="18.4" cy="5.6" r="1.4"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.6c-.9.4-1.8.6-2.8.8a4.9 4.9 0 0 0 2.1-2.7c-.9.5-1.9.9-3 1.1a4.92 4.92 0 0 0-8.4 4.5A13.97 13.97 0 0 1 1.7 3.1 4.93 4.93 0 0 0 3.2 9.7a4.9 4.9 0 0 1-2.2-.6v.1a4.92 4.92 0 0 0 3.9 4.8c-.5.1-1 .1-1.5.1-.4 0-.8 0-1.2-.1a4.93 4.93 0 0 0 4.6 3.4A9.87 9.87 0 0 1 0 19.5a13.94 13.94 0 0 0 7.5 2.2c9 0 13.9-7.5 13.9-13.9v-.6c.9-.6 1.7-1.3 2.3-2.1z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.55v-5.5c0-1.3 0-3-1.85-3s-2.15 1.45-2.15 2.95v5.55h-3.55v-11.5h3.4v1.55h.05c.47-.88 1.62-1.8 3.33-1.8 3.55 0 4.2 2.35 4.2 5.4v6.35zM5.34 8.9a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.61 20.45h3.55v-11.5h-3.55v11.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>All rights reserved. Threadix {new Date().getFullYear()} ©.</p>
        <p>Powered by CodeCraft&reg;</p>
      </div>
    </footer>
  );
};

export default Footer;
