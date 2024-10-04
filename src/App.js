import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState ([]);
  const [cartOpened, setCartOpened] = React.useState (false)
  


  React.useEffect (() => { 
    fetch ('https://66fd9db1699369308955b9cd.mockapi.io/items'). then(res => { 
      return res.json();
    }).then ((json) => { 
      setItems(json);
    });

  }, []);

  const onAddToCart = (obj) => { 
    setCartItems( prev => [... prev, obj])


  }
  


  return <div className="Wrapper clear">
    { cartOpened && < Drawer items = {cartItems} onClose = {() => setCartOpened(false)} /> }
    < Header onClickCart = {() => setCartOpened(true)} onCloseCart = {() => setCartOpened(false) } />


    <div className="content p-40">
      
      <div className="d-flex align-center mb-40 justify-between">

      <h1>Все кроссовки</h1>
      <div className="search-block d-flex">
        <img src="/img/search.svg" alt="search" />
        <input placeholder="Поиск.." />

      </div>

      </div>
      
      <div className="d-flex flex-start flex-wrap">
      
      {items.map((item) => (
         <Card 
         title = {item.name} 
         price = {item.price} 
         imageUrl ={item.imageUrl}
         onPlus={ (obj) => onAddToCart (obj)}
         onFavorite={ () => console.log('добавили')} 
         />
         

      ))}
      
      
     


     


      </div>








    </div>

  </div>;
  }
export default App;
