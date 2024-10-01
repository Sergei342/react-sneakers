
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [ 
  {name:'Мужские кроссовки Nike Blazer', price: 12999, imageUrl: '/img/sneakers/4.jpg'   },
  {name:'Мужские кроссовки Nike Air Max', price: 15600, imageUrl: '/img/sneakers/7.jpg'  },
  {name:'Мужские кроссовки Puma X Aka Boku Future Rider', price: 8499, imageUrl: '/img/sneakers/8.jpg'   },
  {name:'Мужские кроссовки Nike Blazer', price: 12998, imageUrl: '/img/sneakers/5.jpg'   }
 

];

function App() {
  return <div className="Wrapper clear">
    < Drawer />
    < Header />


    
    
      


    



        

       

    
    
    <div className="content p-40">
      
      <div className="d-flex align-center mb-40 justify-between">

      <h1>Все кросовки</h1>
      <div className="search-block d-flex">
        <img src="/img/search.svg" alt="search" />
        <input placeholder="Поиск.." />

      </div>

      </div>
      
      
      <div className="d-flex">
      

      {arr.map((obj) => (
         <Card 
         title = {obj.name} 
         price = {obj.price} 
         imageUrl ={obj.imageUrl} />

      ))}
      
      
     


     


      </div>








    </div>

  </div>;
  }
export default App;
