import React from 'react';
import './../index.css';
import './CardStyle.css';

function Cards(props){
    return (
  
        <div className='cards'>
        <div className='card'>
          <img src={props.imgsrc} height={props.height} 
          width={props.width} alt='movieImg'  className="CardImg"/>
          <div className='cardInfo'>
            <span className='cardCategory'>{props.title}</span>
            <h3 className='cardTittle'>{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div> 
      </div>
    );
}

export default Cards;