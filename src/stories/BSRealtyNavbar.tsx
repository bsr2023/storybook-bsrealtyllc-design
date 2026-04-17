import './BSRealtyNavbar.css';

export interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

export interface BSRealtyNavbarProps {
  /** Image src for the logo */
  logo?: string;
  /** Navigation items */
  navItems?: NavItem[];
  /** Label of the currently active nav item */
  activeItem?: string;
  /** Called when the Login button is clicked */
  onLoginClick?: () => void;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Properties', hasDropdown: true },
  { label: 'Financing', hasDropdown: true },
  { label: 'Property Services', hasDropdown: true },
  { label: 'Education', hasDropdown: true },
  { label: 'About', hasDropdown: true },
  { label: 'Contact', hasDropdown: false },
];

function ChevronDown() {
  return (
    <svg
      className="bsr-navbar__chevron"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="#25282D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BSRealtyNavbar({
  logo = '/logo-new.png',
  navItems = DEFAULT_NAV_ITEMS,
  activeItem,
  onLoginClick,
}: BSRealtyNavbarProps) {
  return (
    <nav className="bsr-navbar" aria-label="Main navigation">
      {/* Logo */}
      <a href="/" className="bsr-navbar__logo-link" aria-label="BS Realty home">
        <img
          className="bsr-navbar__logo"
          src={logo}
          alt="BS Realty LLC"
        />
      </a>

      {/* Navigation links */}
      <ul className="bsr-navbar__links" role="list">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href ?? '#'}
              className={`bsr-navbar__link${activeItem === item.label ? ' bsr-navbar__link--active' : ''}`}
              aria-current={activeItem === item.label ? 'page' : undefined}
            >
              <span>{item.label}</span>
              {item.hasDropdown && <ChevronDown />}
            </a>
          </li>
        ))}
      </ul>

      {/* Login button */}
      <button
        type="button"
        className="bsr-navbar__login"
        onClick={onLoginClick}
      >
        Login
      </button>
    </nav>
  );
}

export default BSRealtyNavbar;
