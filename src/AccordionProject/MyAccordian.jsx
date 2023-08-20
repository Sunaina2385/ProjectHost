import React,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const MyAccordian=(props)=>{

    const [show,setShow]=useState(false);

    const showAns=()=>{
        setShow(!show);
    }

    return(
        <>
            <div className='main-heading'>
                <p onClick={showAns}>{show?<RemoveIcon/>:<AddIcon/>}</p>
                <h3>{props.ques}</h3>
            </div> 
            {show && <p className='answers'>{props.ans}</p>}
        
        </>
    );
}

export default MyAccordian;