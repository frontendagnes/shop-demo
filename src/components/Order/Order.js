import React from 'react'
import './Order.css'
function Order( { order }) {
    return (
        <div className="order">
            <h1>Order</h1>
            <h3>{order.data.amount}</h3>
        </div>
    )
}

export default Order
