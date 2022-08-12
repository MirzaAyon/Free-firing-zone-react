import React from 'react';
import './Card.css';
import { BsFillCartFill } from "react-icons/bs"

const Card = ({ gunData, handleAddToCart }) => {
    // console.log(props);
    // console.log(props.gunData);

    // const { name } = props.gunData //des krlam
    // console.log(name) //name showing
    // const { gunData } = props
    // const { name } = gunData;
    // console.log(name);
    // const { name, img, bullet, capacity, action, price,id} = gunData; //id ta shorae dilam
    const { name, img, bullet, capacity, action, price } = gunData; //id ta shorae dilam
    console.log(name);
    console.log(gunData)
    // const handleAddToCart = () => {
    //     console.log('Add to Cart'); //add to cart e click korle showing
    // }
    // const handleAddToCart = (id) => {
    //     console.log(id); //add to cart e click korle showing
    // }
    //handle add to cart ke app.js e pathalam jeno ekhane click korle okhane mane app e kichu change hy
    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <div className='gun-info'>
                <h1 >{name}</h1>
                <p>Buttet type : {bullet}</p>
                <p>Capacity : {capacity}</p>
                <p>Action: {action}</p>
            </div>
            <div className='add-to-cart'>
                <button>
                    {/* <BsFillCartFill className='icon' onClick={handleAddToCart(id)}></BsFillCartFill> */}
                    {/* evabe korle reload dile shob auto show hbe tai call back dewa lagbe */}
                    <BsFillCartFill className='icon' onClick={() => handleAddToCart(gunData)}></BsFillCartFill>
                    {/* r evabe korle reload dilei render hbe na just click korlei id ta pabo, eta ke call back func ba empty arrow func o bole r evabe click chara kaj na hobar karon holo ek func er vitore arek func ke pathae dsi */}
                </button>
                <h1>${price}</h1>
            </div>
        </div>
    );
};

export default Card;
//apps e console.log(guns)
//and cards e console.log(props) er maddhome jante pari apps er names ta cards er name e chole geche