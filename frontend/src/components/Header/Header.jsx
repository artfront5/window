import React from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import css from './header.module.scss';

function Header(props) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  return (
    <header className={css.header}>
      <div className={css.header__content}>
        <Link to="/" className={css.header__content__logotype}>
          <h2 className={css.header__content__logo}>Окна СПб</h2>
        </Link>
        <nav className={`${css.header__content__nav} ${menuOpen ? css.isMenu : ''}`}>
          <ul>
            <li>
              <Link to="/" className={css.link}>
                Главная
              </Link>
            </li>
          </ul>
        </nav>
        <div className={css.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
