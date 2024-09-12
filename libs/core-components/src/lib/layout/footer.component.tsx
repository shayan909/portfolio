import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-content text-center">
          <Link href="/" className="logo">
            <img
              src="/assets/logo/logo.png"
              alt="Logo"
              style={{ height: '88px', borderRadius: '11px' }}
            />
          </Link>
          <ul className="footer-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/bio">Bio</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <p className="copyright">
            Made with 💙 and ☕ by <span>Shayan Ur Rehman</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
