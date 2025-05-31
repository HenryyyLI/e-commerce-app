import React, {useState} from 'react';
import './Product.scss';
import {useParams} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
    
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1);

    // const images = [
    //     "https://images.pexels.com/photos/18235086/pexels-photo-18235086.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     "https://images.pexels.com/photos/18235009/pexels-photo-18235009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    // ];

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][id][$eq]=${id}`);
    // console.log(data);
    const product = data?.[0];

    const dispatch = useDispatch();

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={process.env.REACT_APP_UPLOAD_URL + product?.img?.url} alt="" onClick={e => setSelectedImg("img")} />
                    <img src={process.env.REACT_APP_UPLOAD_URL + product?.img2?.url} alt="" onClick={e => setSelectedImg("img2")} />
                </div>
                <div className="mainImg">
                    <img src={process.env.REACT_APP_UPLOAD_URL + product?.[selectedImg]?.url} alt=""/>
                </div>
            </div>
            <div className="right">
                <h1>{product?.title}</h1>
                <span className="price">{product?.price}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea architecto velit rerum cumque dolor officiis culpa nesciunt inventore blanditiis perspiciatis ipsam, quis totam, est sunt magni molestiae provident voluptate accusantium.</p>
                <div className="quantity">
                    <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>
                <button className="add" onClick={() => dispatch(addToCart({
                    id: product?.id,
                    title: product?.title,
                    desc: product?.desc,
                    img: process.env.REACT_APP_UPLOAD_URL + product?.img?.url,
                    price: product?.price,
                    quantity,
                }))}>
                    <AddShoppingCartIcon />ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon />ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon />ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Product


