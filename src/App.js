
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [ {name:'Мужские кроссовки Nike Blazer' }]

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
      <Card 
      title = " Мужские кроссовки Nike Blazer Mid Suede" 
      price = {12999} 
      imageUrl =" /img/sneakers/4.jpg" />
      
     


     


      </div>








    </div>

  </div>;
  }
export default App;
