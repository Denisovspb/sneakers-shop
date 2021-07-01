import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import AppContext from '../context';

function Favorites() {
  const { favorites, onFavorite } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      {favorites.length > 0 ? (
        <>
          <div className="d-flex align-center justify-between mb-40">
            <h1>Мои закладки</h1>
          </div>
          <div className="d-flex flex-wrap">
            {favorites.map((obj) => (
              <Card key={obj.src} favorited={true} onFavorite={onFavorite} {...obj} />
            ))}
          </div>
        </>
      ) : (
        <div className="empty d-flex align-center justify-center flex-column flex">
          <img width={70} height={70} src="/img/favIsEmpty.svg" alt="Sad smile" />
          <h3 className="mb-10">Закладок нет :(</h3>
          <p>Вы ничего не добавили в закладки</p>
          <Link to="/">
            <button className="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" /> Вернуться назад
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Favorites;
