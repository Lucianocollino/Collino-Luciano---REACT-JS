import { useState } from "react"
import {db} from "../../services/firebase/firebaseConfig"

import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { Timestamp } from "firebase/firestore"

const Checkout = () => {
    const[loading, setLoading]= useState(false)
    const [orderId, setorderId]= useState("")

    const{cart,total,clearCart} = useContext (CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(newDate())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, "products")

            const productsAddedFromFiresote = await getDocs(query(productsRef, where(documentId(), "in")))
        }
        finally{}
    }

    if(loading) {
        return <h1>El id de sur orden es: {orderId}</h1>
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId}</h1>

    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout