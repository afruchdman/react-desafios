//Este componente tiene los detalles de un producto de limpieza
import React from 'react'
import ItemCount from './ItemCount'

const Item = ({producto}) => {
  const {name, img, description, stock} = producto
  return (
    <div className="card" style={{width:'18rem', margin:'.5rem'}}>
    <img src={img}className="card-img-top" alt={name}/>
    <div className="card-body">
        <p className="card-text h4">{name}</p>
        <p className="card-text">{description}</p>
    </div>
    <ItemCount stock={stock} initial={1} onAdd={'onAdd'}/>
</div>
  )
}

export default Item