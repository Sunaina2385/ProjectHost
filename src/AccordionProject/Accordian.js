import React, { useState } from 'react';
import './Accordian.css';
import {questions} from './api';
import MyAccordian from './MyAccordian';

const Accordian=()=>{

    const [Data,setData]=useState(questions);
   return(
        <>
            
            <section className='main-div'>
            <h1>React Interview Questions</h1>
            {
                Data.map((currVal,index)=>{
                    return <MyAccordian
                    key={index} 
                    ques={currVal.question} 
                    ans={currVal.answer}/>
                })
            }
            </section>
        </>
   );
}

export default Accordian;