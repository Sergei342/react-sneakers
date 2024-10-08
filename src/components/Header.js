function Header (props) { 
    return (
        <header className=" d-flex justify-between align-centerv p-40">
        <div className="d-flex align-center">
        <img className="logoHeader" width={40} height={40} src="/img/logo.png" alt="logo" />
        <div className="headerInfo">
         <div>
              <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
          </div>
        </div>
        <ul className="d-flex">
        
       
          < li onClick = {props.onClickCart} className="mr-20 cu-p" > 
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span className="Sum p-10">1205 руб</span>
          </li>
          <li> 
          <img width={18} height={18} src="/img/user.svg" alt="user"/>
            </li>
        </ul>
      </header>
    )
    
}

export default Header;