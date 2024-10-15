import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id,nombre,precio,imagenUrl,stock}) => {

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
            <ItemCount inital={1} stock ={stock} onAdd={(quantity) => console.log ("cantidad agregada")}/>
            <button className="Option">
                Ver detalle
            </button>
        </footer>
    </article>
)
}

export default ItemDetail;