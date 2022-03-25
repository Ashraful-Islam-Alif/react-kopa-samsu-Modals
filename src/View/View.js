import React from 'react';
import './View.css'

const View = ({ cart }) => {
    return (
        <div>
            {
                cart.map(item => (

                    <div className='image-view'>
                        <img src={item.img} alt="" srcset="" />
                        <div>
                            <h1>{item.name}</h1>
                            <p>Price: {item.price}</p>
                        </div>
                    </div>

                ))
            }
        </div>
    );
};

export default View;