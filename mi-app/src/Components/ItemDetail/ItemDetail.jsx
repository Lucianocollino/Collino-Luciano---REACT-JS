import "./ItemDetail.css";
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id,nombre,precio,imagenUrl,stock}) => {
const [quantityAdded, setQuantityAdded] = useState(0)

const { addItem } = useContext(CartContext)

const handleOnAdd = (quantity) => {
setQuantityAdded(quantity)

const item = {
    id, name, price
}

addItem (item, quantity)
}

return(
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {nombre}
            </h2>
        </header>
        <picture>
            <img src={imagenUrl} alt={nombre} className="ItemImg" />
        </picture>

        <section>
            <p className="info">
                precio: ${precio} 
            </p>
            <p className="Info">
            Stock disponible: {stock}</p>
        </section>
        <footer className="ItemFooter">
        
        {
            quantityAdded > 0 ? (
                <Link to="./cart" className="Option"> Terminar Compra</Link>
            ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
            )
        }
                Ver detalle
            
        </footer>
    </article>
)
}

export default ItemDetail;