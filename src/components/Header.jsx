import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img width={40} src="img/pizza-logo.svg" />
        <div>
          <h1>REACT PIZZA</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </Link>
      <Link to="/cart" className={styles.button}>
        <p>0 ₽</p>
        <div className={styles.line}></div>
        <img src="img/cart.svg" />
        <span>0</span>
      </Link>
    </header>
  );
}

export default Header;
