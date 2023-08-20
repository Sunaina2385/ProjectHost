import React from 'react';
import SData from './CardData';
import Card from './Cards';
import './CardStyle.css';

const Netflix=(props)=>{
    return (
        <Card
        imgsrc={SData[1].imgsrc}
        link={SData[1].link}
        height={SData[1].height}
        width={SData[1].width}
        sname={SData[1].sname}
        title={SData[1].title}
        key={SData[1].id}
        /> 
    );
}
const Amazon=(props)=>{
    return (
        <Card
        link={SData[4].link}
        imgsrc={SData[4].imgsrc}
        height={SData[4].height}
        width={SData[4].width}
        sname={SData[4].sname}
        title={SData[4].title}
        key={SData[4].id}
        /> 
    );
}

export {Netflix,Amazon};