import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';


const CreateNote=(props)=>{

    const state=useState();
    const [expand,setexpand]=useState(false);

    const  [note,setnote]=useState({
        title:"",
        content:""
    })

    const inputEvent=(event)=>{
        const {name,value}=event.target;
        setnote((prevVal)=>{
            return{
                ...prevVal,
                [name]:value,
            };  
        })
    }

    const addNotes=()=>{
        props.passNote(note);
        setnote({
            title:"",
            content:""
        });
    }

    const expandit=()=>{
        setexpand(true);
    }

    const backtoNormal=()=>{
        setexpand(false);
    }

    return (
        <>
            <div className="main_note">
                <form>
                    {
                        expand?<input type="text" value={note.title}
                        name="title"
                        onChange={inputEvent} placeholder="Title" autoComplete='off'/>:null
                    }
                    <textarea rows="" columns="" value={note.content} name="content" onChange={inputEvent} placeholder='Write a note' 
                    onClick={expandit} onDoubleClick={backtoNormal}></textarea>
                    {
                        expand?<Button className="Mui-Button-root" onClick={addNotes}>
                        <AddIcon className="plus_sign"/>
                        </Button>:null
                    }
                </form>
            </div>
        </>
    );
}

export default CreateNote;