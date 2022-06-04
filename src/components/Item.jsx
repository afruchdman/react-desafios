//Este componente tiene los detalles de un producto de limpieza
import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";


const Item = ({producto}) => {
  const {name, img, description, stock,id} = producto
  return (
    <>
    

    <div className="card" style={{width:'18rem', margin:'.5rem'}}>
    <img src={img}className="card-img-top" alt={name} />
    <div className="card-body">
        <p className="card-text h4"><Link to={`/item/${id}`}>{name}</Link></p>
        <p className="card-text">{description}</p>
        <ul className="list-group list-group-flush">
          {stock === 0 ? <li className="list-group-item">Lo sentimos, no hay stock disponible</li> :
          <li className="list-group-item" >stock disponible {stock}</li>}
        </ul>
    </div>
  </div>

</>
  )
}

export default Item