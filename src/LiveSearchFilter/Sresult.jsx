import React from 'react';

const Sresult=(props)=>{
    const img=`https://source.unsplash.com/600x400/?${props.src}`;
    return(
        <>
            <div>
                <img src={img} alt="defaultImg"/>
            </div>
        </>
    );
}

export default Sresult;