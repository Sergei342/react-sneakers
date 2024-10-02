import React  from 'react';
import  styles from './Card.modules.scss';



function Card (props) { 
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => { 
    setIsAdded (!isAdded)
  }


    return ( 
        <div className= "card" >
    <div className= "favorite" onClick={props.onClickFavorite} >
<img src="/img/unliked.svg" alt="unliked" />
</div>
<img width={133} height={112} src= {props.imageUrl} alt="Sneakers"/>
<h5> {props.title}</h5>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column ">
    <span>Цена</span>
    <b>{props.price}</b>
  </div>
  
    <img className='plus' onClick={onClickPlus} src= {isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } alt="plus" />
  
</div>
</div>
    );
}

export default Card;