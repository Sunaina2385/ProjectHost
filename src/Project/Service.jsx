import React from 'react';
import web from './web.jpg';
import Card from './Card';
import SData from './SData';

const Service=()=>{
    return (
        <>
            <div className='my-5'>
                <h1 className="text-center">Our Services</h1> 
            </div>
            <div className="container-fluid mb-5">
                <div className='row'>
                    <div className='col-10 mx-auto'>
                         <div className='row gy-5'>
                            {
                                SData.map((CurrEle,index)=>{
                                    return(
                                        <Card 
                                        key={index}
                                        src={CurrEle.imgsrc}
                                        title={CurrEle.title}/>
                                    );
                                })
                            }
                         </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;