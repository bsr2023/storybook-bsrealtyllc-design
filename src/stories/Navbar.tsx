import './Navbar.css';

export interface NavbarProps {
  brand: string;
  links: { label: string; href?: string; children?: { label: string; href: string }[] }[];
  loginButton?: { label: string; href: string };
}

export const Navbar = ({ brand, links, loginButton }: NavbarProps) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">{brand}</a>
      </div>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li key={index} className={link.children ? 'dropdown' : ''}>
            <a href={link.href || '#'}>{link.label}</a>
            {link.children && (
              <ul className="dropdown-menu">
                {link.children.map((child, childIndex) => (
                  <li key={childIndex}>
                    <a href={child.href}>{child.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {loginButton && (
        <div className="navbar-login">
          <a href={loginButton.href} className="login-button">{loginButton.label}</a>
        </div>
      )}
    </nav>
  );
};