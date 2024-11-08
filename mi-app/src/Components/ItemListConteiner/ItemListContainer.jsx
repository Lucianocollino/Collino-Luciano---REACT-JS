import { useEffect, useState } from "react"
import {getProducts , getProductByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListConteiner = ({ greeting }) => {
    const [products, setProducts] = useState([])

   

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts

asyncFunc(categoryId)
.then (response => {
    setProducts(response)
})

      
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListConteiner