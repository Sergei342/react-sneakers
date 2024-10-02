
import  styles from './Card.modules.scss';


console.log(styles);

function Card (props) { 
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
  <button className="button" onClick={props.onClickPlus}>
    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
  </button>
</div>
</div>
    );
}

export default Card;