import React from 'react';
import './Cart.scss';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';

const Cart = () => {

    // const data = [
    //     {
    //         id: 1,
    //         img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Long Sleeve Graphic T-shirt",
    //         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsum, quos ducimus aliquam dolor ullam modi laborum dolorem, totam aspernatur quisquam perferendis suscipit neque, nobis adipisci saepe voluptatem distinctio culpa!",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 2,
    //         img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Coat",
    //         desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsum, quos ducimus aliquam dolor ullam modi laborum dolorem, totam aspernatur quisquam perferendis suscipit neque, nobis adipisci saepe voluptatem distinctio culpa!",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    // ];

    const products = useSelector(state => state.cart.products);

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.quantity * item.price));
        return total.toFixed(2);
    }

    const dispatch = useDispatch();

    const stripePromise = loadStripe('pk_test_51RUWqKQVqtiklUeFI9NcdhGaXMVUYnaSc0Wzmnz7B4qazZCQMHtH4Pmdhy1g4HCriroohVq73c55RdobQk58DpVY00dHKXOZWR');
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;

            const res = await makeRequest.post("/orders", {
                products,
            });

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {products?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt=""/>
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">{item.quantity} × ${item.price}</div>
                    </div>
                    <DeleteOutlineIcon className="delete" onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
    )
}

export default Cart
