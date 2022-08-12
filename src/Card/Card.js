import React from 'react';
import './Card.css';

const Card = ({ gunData }) => {
    // console.log(props);
    // console.log(props.gunData);

    // const { name } = props.gunData //des krlam
    // console.log(name) //name showing
    // const { gunData } = props
    // const { name } = gunData;
    // console.log(name);
    const { name, img, bullet, capacity, action, price } = gunData;
    console.log(name);
    console.log(gunData)
    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <h1 >{name}</h1>
            <p>Buttet type : {bullet}</p>
            <p>Capacity : {capacity}</p>
            <p>Action: {action}</p>
            <div className='add-to-cart'>
                <button>
                    Add to cart
                </button>
                <h1>${price}</h1>
            </div>
        </div>
    );
};

export default Card;
//apps e console.log(guns)
//and cards e console.log(props) er maddhome jante pari apps er names ta cards er name e chole geche