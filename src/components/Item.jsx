//Este componente tiene los detalles de un producto de limpieza
import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  const {name, img, description, stock, id} = producto
  return (
    <div className="card" style={{width:'18rem', margin:'.5rem'}}>
    <img src={img}className="card-img-top" alt={name}/>
    <div className="card-body">
        <p className="card-text h4">{name}</p>
        <p className="card-text">{description}</p>
        <p className="card-text"><Link to={`/item/${id}`}>Detalles</Link></p>
    </div>
    {stock === 0 ? <p>Lo sentimos, no hay stock disponible</p> : 
    <ItemCount stock={stock} initial={1} onAdd={'onAdd'}/>}
</div>
  )
}

export default Item