import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import AppContext from './context';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => { 
    async function fetchData(){
      try {
        const [cartResponse, favoriteResponse, itemsResponse] = await Promise
          .all([axios.get('https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/cart'), 
          axios.get('https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/favorites'), 
          axios.get('https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/items')
        ]);

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavorites(favoriteResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при получении данных');
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (item) => {
    try {
      const findItem = cartItems.find(cartItem => Number(cartItem.parentId) === Number(item.id))
      if (findItem){
        setCartItems(prev => prev.filter(cartItem => Number(cartItem.parentId) !== Number(item.id)));
        await axios.delete(`https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/cart/${findItem.id}`);
      } else {
        setCartItems(prev => [...prev, item]);
        const { data } = await axios.post('https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/cart', item);
        setCartItems(prev => prev.map(item => {
          if(item.parentId === data.parentId){
            return {
              ...item,
              id: data.parentId
            }
          }
          return item;
        }));
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
    }
  };

  const onRemoveFromCart = async (id) => {
    try {
      await axios.delete(`https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/cart/${id}`);
      setCartItems( prev => prev.filter(item => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Ошибка при удалении товара из корзины');
    }    
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/favorites/${obj.id}`);
        setFavorites(prev => prev.filter(item => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить товар в избранное');
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((item) => Number(item.parentId) === Number(id));
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onFavorite, setCartOpened, setCartItems }}>
      <div className="wrapper clear">
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveFromCart} opened={cartOpened} />
        <Header onClickCart={() => setCartOpened(true)} />

        <Route exact path="">
          <Home 
            items={items}
            cartItems={cartItems} 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
            onChangeSearchInput={onChangeSearchInput} 
            onFavorite={onFavorite} 
            onAddToCart={onAddToCart}
            isLoading={isLoading} 
          />
        </Route>
        <Route path="favorites" exact>
          <Favorites />
        </Route>
        <Route path="orders" exact>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;