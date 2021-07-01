import axios from 'axios';
import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';
import { Link } from 'react-router-dom';

function Orders() {
  const { onAddToCart, onFavorite } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [idOfOrders, setIdOfOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const totalSum = orders.map((obj) =>
    obj.items.map((obj) => obj.price).reduce((sum, price) => sum + price, 0),
  );
  console.log(totalSum);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/orders`,
        );
        setOrders(data.map((obj) => obj));
        setIsLoading(false);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex flex-wrap flex-column">
        {isLoading ? (
          [...Array(8)].map((obj, index) => (
            <Card
              key={index}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={(obj) => onFavorite(obj)}
              {...obj}
              loading={isLoading}
            />
          ))
        ) : orders.length > 0 ? (
          orders.map((obj) => (
            <>
              <h3 className="mb-20">
                Заказ #{obj.id} на сумму{' '}
                {obj.items.map((obj) => obj.price).reduce((sum, price) => sum + price, 0)} руб.
              </h3>
              <div className="d-flex flex-wrap">
                {obj.items.map((obj, index) => (
                  <Card key={index} {...obj} loading={isLoading} />
                ))}
              </div>
            </>
          ))
        ) : (
          <div className="empty d-flex align-center justify-center flex-column flex">
            <img width={70} height={70} src="img/ordersEmpty.svg" alt="Sadness" />
            <h3 className="mb-10">У вас нет заказов</h3>
            <p>Видимо вы бомж...</p>
            <Link to="/">
              <button className="greenButton">
                <img src="img/arrow.svg" alt="Arrow" /> Вернуться назад
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
