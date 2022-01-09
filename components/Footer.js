import Logo from "./Logo";
import NavLink from "./NavLink";

export default function Footer() {
  return (
    <footer id="footer" className="pad-x">
      <div className="footer-content">
        <div className="footer-col">
          <Logo />
          <p>A decentralized open-source alternative to Slack and Microsoft Teams</p>
        </div>

        <div className="footer-col">
          <p className="footer-title">Product</p>
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/download">Download</NavLink>
          <NavLink href="/changelog">Changelog</NavLink>
        </div>

        <div className="footer-col">
          <p className="footer-title">Company</p>
          <NavLink href="/brand-assets">Brand Assets</NavLink>
          <NavLink href="/privacy-policy">Privacy Policy</NavLink>
          <NavLink href="/terms-and-conditions">Terms & Conditions</NavLink>
        </div>

        <div className="footer-col">
          <p className="footer-title">Support</p>
          <NavLink href="/brand-assets">Help Center</NavLink>
          <NavLink href="/privacy-policy">Contact</NavLink>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">© {new Date().getFullYear()} Prose</p>
        <div className="socials">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_166_369)">
                <path
                  d="M16 8.04813C16.0003 6.51922 15.5625 5.02223 14.7385 3.73441C13.9144 2.44659 12.7385 1.42189 11.3501 0.781636C9.96173 0.14138 8.41893 -0.0876158 6.90442 0.121765C5.38991 0.331145 3.96712 0.970131 2.80451 1.96306C1.6419 2.956 0.788165 4.26129 0.344396 5.72438C-0.0993733 7.18748 -0.114591 8.7471 0.300544 10.2186C0.71568 11.6901 1.54378 13.0118 2.68679 14.0272C3.82981 15.0426 5.23986 15.7092 6.75 15.9481V10.3601H4.719V8.04813H6.75V6.28513C6.70627 5.87358 6.7536 5.45745 6.88863 5.06623C7.02366 4.675 7.24309 4.31827 7.53136 4.02131C7.81964 3.72436 8.1697 3.49444 8.55674 3.34786C8.94379 3.20128 9.35833 3.14163 9.771 3.17313C10.371 3.18101 10.9696 3.23316 11.562 3.32913V5.30013H10.554C10.3823 5.27768 10.2077 5.29412 10.0432 5.34825C9.87874 5.40237 9.72853 5.49279 9.6037 5.61282C9.47887 5.73284 9.38263 5.8794 9.3221 6.04165C9.26157 6.20389 9.23829 6.37768 9.254 6.55013V8.05013H11.473L11.118 10.3621H9.25V15.9531C11.1322 15.6554 12.8464 14.6955 14.0838 13.2463C15.3213 11.7971 16.0008 9.95377 16 8.04813V8.04813Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_166_369">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 3C15.4 3.3 14.8 3.4 14.1 3.5C14.8 3.1 15.3 2.5 15.5 1.7C14.9 2.1 14.2 2.3 13.4 2.5C12.8 1.9 11.9 1.5 11 1.5C9.3 1.5 7.8 3 7.8 4.8C7.8 5.1 7.8 5.3 7.9 5.5C5.2 5.4 2.7 4.1 1.1 2.1C0.8 2.6 0.7 3.1 0.7 3.8C0.7 4.9 1.3 5.9 2.2 6.5C1.7 6.5 1.2 6.3 0.7 6.1C0.7 7.7 1.8 9 3.3 9.3C3 9.4 2.7 9.4 2.4 9.4C2.2 9.4 2 9.4 1.8 9.3C2.2 10.6 3.4 11.6 4.9 11.6C3.8 12.5 2.4 13 0.8 13C0.5 13 0.3 13 0 13C1.5 13.9 3.2 14.5 5 14.5C11 14.5 14.3 9.5 14.3 5.2C14.3 5.1 14.3 4.9 14.3 4.8C15 4.3 15.6 3.7 16 3Z"
                fill="currentColor"
              />
            </svg>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.145 4.85213C12.6752 4.85213 13.105 4.42232 13.105 3.89213C13.105 3.36194 12.6752 2.93213 12.145 2.93213C11.6148 2.93213 11.185 3.36194 11.185 3.89213C11.185 4.42232 11.6148 4.85213 12.145 4.85213Z"
                fill="currentColor"
              />
              <path
                d="M8 12C5.794 12 4 10.206 4 8C4 5.794 5.794 4 8 4C10.206 4 12 5.794 12 8C12 10.206 10.206 12 8 12ZM8 6C6.897 6 6 6.897 6 8C6 9.103 6.897 10 8 10C9.103 10 10 9.103 10 8C10 6.897 9.103 6 8 6Z"
                fill="currentColor"
              />
              <path
                d="M12 16H4C1.944 16 0 14.056 0 12V4C0 1.944 1.944 0 4 0H12C14.056 0 16 1.944 16 4V12C16 14.056 14.056 16 12 16ZM4 2C3.065 2 2 3.065 2 4V12C2 12.953 3.047 14 4 14H12C12.935 14 14 12.935 14 12V4C14 3.065 12.935 2 12 2H4Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
