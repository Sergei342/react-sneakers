import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState (false)
  const [cartOpened, setCartOpened] = React.useState (false)
  


  React.useEffect (() => { 
    fetch ('https://66fd9db1699369308955b9cd.mockapi.io/items'). then(res => { 
      return res.json();
    }).then ((json) => { 
      setItems(json);
    });

  }, []);
  


  return <div className="Wrapper clear">
    { cartOpened ? < Drawer onClose = {() => setCartOpened(false)} /> : null}
    < Header onClickCart = {() => setCartOpened(true)} onCloseCart = {() => setCartOpened(false) } />


    <div className="content p-40">
      
      <div className="d-flex align-center mb-40 justify-between">

      <h1>Все кросовки</h1>
      <div className="search-block d-flex">
        <img src="/img/search.svg" alt="search" />
        <input placeholder="Поиск.." />

      </div>

      </div>
      
      <div className="d-flex flex-start flex-wrap">
      
      {items.map((obj) => (
         <Card 
         title = {obj.name} 
         price = {obj.price} 
         imageUrl ={obj.imageUrl}
         onClickPlus={ () => console.log(obj)} 
         onClickFavorite={ () => console.log(obj)} 
         />
         

      ))}
      
      
     


     


      </div>








    </div>

  </div>;
  }
export default App;
