import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import {getDoc, db} from "firebase/firestore";
import {db} from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "products", itemId)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(()=> {
            setLoading(false)
        })
        }, [itemId])
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
    
};

export default ItemDetailContainer;
