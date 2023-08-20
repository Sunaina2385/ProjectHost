import React,{useState} from 'react';
import './Search.css';
import Sresult from './Sresult';

const Search=()=>{
    const [img,setimg]=useState("");
    
    const inputEvent=(event)=>{
        const data=event.target.value;
        console.log(data);
        setimg(data);

    }
    return (
        <>
           <div className='SearchBar'>
                <input type="text" placeholder="Search here"
                value={img}
                onChange={inputEvent}
                />
                {img===""?null:<Sresult  src={img}/>}
           </div>
        </>
    );
}

export default Search;