import React  from 'react';




function Card ({onPlus, onFavorite, title, price, imageUrl}) { 
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => { 
    onPlus (title, price, imageUrl);
    setIsAdded (!isAdded)
  }
  // console.log (title, price, imageUrl)


    return ( 
        <div className= "card" >
    <div className= "favorite" onClick={onFavorite} >
<img src="/img/unliked.svg" alt="unliked" />
</div>
<img width={133} height={112} src= {imageUrl} alt="Sneakers"/>
<h5>{title}</h5>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column ">
    <span>Цена</span>
    <b>{price}</b>
  </div>
  
    <img className='plus' onClick={onClickPlus} src= {isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } alt="plus" />
  
</div>
</div>
    );
}

export default Card;