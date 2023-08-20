import React from 'react';
import web from './web.jpg';
const Card=(props)=>{
    return (
        <>
            <div className='col-md-4 col-10 mx-auto'>
                <div className="card">
                    <img src={props.src} className="card-img-top" alt="Loading..." />
                        <div className="card-body">
                            <h5 className='card-title font-weight:bold'>{props.title}</h5>
                                <p className='card-text'>paragraph</p>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Card;