import logo from '../../assets/logo.svg';

import './Header.css';

export default function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="User Info logo" />
      </nav>
    </header>
  );
}
