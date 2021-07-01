import React from 'react';
import AppContext from '../../context';
import Info from '../Info';
import axios from 'axios';

import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { setCartItems, cartItems } = React.useContext(AppContext);

  const totalPrice = cartItems.reduce((sum, obj) => sum + obj.price, 0);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/orders',
        { items: cartItems },
      );
      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(`https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/cart/${item.id}`);
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа');
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина{' '}
          <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close" onClick={onClose} />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items flex">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <div style={{ backgroundImage: `url(${obj.src})` }} className="cartItemImg" />
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.name}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб. </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice * 0.05).toFixed(2)} руб. </b>
                </li>
              </ul>
              <button disabled={isLoading} className="greenButton" onClick={onClickOrder}>
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderCompleted ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы один товар, чтобы сделать заказ.'
            }
            image={isOrderCompleted ? '/img/complete-order.svg' : '/img/cartIsEmpty.svg'}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
