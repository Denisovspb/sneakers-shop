import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context';

function Header(props) {
  const { cartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => sum + obj.price, 0);

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img src="/img/logo.png" width={40} height={40} alt="Logo" />
          <div>
            <h3 className="text-uppercase">Sneakers shop</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img src="/img/cart.svg" width={18} height={18} alt="Cart" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img src="/img/favorite.svg" width={18} height={18} alt="Favorites" />
          </Link>
        </li>
        <li className="cu-p">
          <Link to="/orders">
            <img src="/img/user.svg" width={18} height={18} alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
