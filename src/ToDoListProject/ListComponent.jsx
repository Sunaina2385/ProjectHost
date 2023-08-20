import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const ListComponent=(props)=>{
    
    const [line,setline]=useState(false);
    const cutIt=()=>{
        setline(true);
    }

    return(
        <>
            <div className="todostyle">
                <span onClick={cutIt} className='deleteIcon'><DeleteIcon/></span>
                <li style={{textDecoration:line?"line-through":"none"}}>{props.text}</li>
            </div>
    </>
    );
}

export default ListComponent;