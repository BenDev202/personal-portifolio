import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 10L10 40L30 70L50 40L30 10Z" fill="white" />
            <path d="M50 10L30 40L50 70L70 40L50 10Z" fill="white" />
            <path d="M70 10L50 40L70 70L90 40L70 10Z" fill="white" />
          </svg>
        </div>
        <div className="footer-tagline">
          <p>
            <span className="text-gray">Designing the</span>
            <span className="text-accent">extraordinary</span>
            <br />
            <span className="text-gray">one</span>
            <span className="text-accent">pixel</span>
            <span className="text-gray">at a time.</span>
          </p>
          <p className="copyright">Portfolio v2.3 © 2024 Rahul</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
