import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        getProductById("1") 
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false); 
            });
    }, []);

    if (loading) {
        return <div>Cargando...</div>; 
    }

    if (!product) {
        return <div>Producto no encontrado</div>; 
    }

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;
