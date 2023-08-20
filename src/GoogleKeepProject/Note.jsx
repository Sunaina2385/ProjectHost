import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@mui/icons-material/Delete';


const Note=(props)=>{

    const deleteItem=()=>{
        props.delete1(props.id);
    }

    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br/>
                <p>{props.content}</p>
                <Button className="btn" onclick={deleteItem}>
                    <DeleteIcon className='deleteIcon'/>
                </Button>
            </div>
        </>
    );
}

export default Note;