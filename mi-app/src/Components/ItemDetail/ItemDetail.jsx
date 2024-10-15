

const ItemDetail = ({id,nombre,precio,imagenUrl,stock}){

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
            
            <button className="Option">
                Ver detalle
            </button>
        </footer>
    </article>
)
}