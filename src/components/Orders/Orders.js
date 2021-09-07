import React, { useState, useEffect } from 'react'
import './Orders.css'

import Order from '../Order/Order'
import db from "../../app/utility/firebase"
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'

function Orders() {

    const user = useSelector(selectUser)

    const [orders, setOrders] = useState([])

useEffect(() => {
    if(user){
    db.collection("users")
      .doc(user.uid)
      .collection("orders")
      .orderBy("created", "desc")
      .onSnapshot((snapshot) => {
        setOrders(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        )
      })
    } else setOrders([])
}, [user])
    return (
        <div className="orders">
            <h1>Orders</h1> 
            {orders?.map((order) => (
                <Order key={order.id} order={order} />
            ))}      
        </div>
    )
}

export default Orders
