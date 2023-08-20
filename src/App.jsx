import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Project/Home';
import About from './Project/About';
import Contact from './Project/Contact';
import Service from './Project/Service';
import {Switch,Route,Redirect} from "react-router-dom";
import NavBar from './Project/NavBar';

const App=()=>{
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>     
        <Route exact path="/about" component={About}/>     
        <Route exact path="/contact" component={Contact}/>     
        <Route exact path="/service" component={Service}/> 
        <Redirect to="/"></Redirect>    
      </Switch>   
    </>
  );
}

export default App;
























/*
import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Menu from './RouterComponent/Menu';
import About from './RouterComponent/About';
import Contact from './RouterComponent/Contact';
import Service from './RouterComponent/Service';
import Error1 from './RouterComponent/Error1';

const App=()=>{
  return (
    <>
      <Menu/>
      <Switch>
        <Route exact path="/" component={()=>{
          return <About name="About"/>
        }}/>
        <Route path="/contact" render={()=>{
          return <Contact name="Contact"/>
        }}/>
        <Route path="/service" component={Service}/>
        //  <Route component={Error1}/> 
        <Redirect to="/"/>
      </Switch>
    </>);
}

export default App;

*/

/*
import React from 'react';
import Search from './LiveSearchFilter/Search';

const App=()=>{
  return(
    <Search/>
  );
}

export default App;
*/

/*
import React from 'react';
import {Switch,Route} from "react-router-dom";
import About from "./RouterComponent/About";
import Menu from "./RouterComponent/Menu";
import Contact from "./RouterComponent/Contact";
import Service from "./RouterComponent/Service";
import Error from "./RouterComponent/Error";
import User from "./RouterComponent/User";
const App=()=>{
  return(
    <>
      <Menu/>
      <Switch>
        <Route exact path="/" component={()=><About name="About"/>}/>
        <Route exact path="/contact" component={()=><Contact name="Contact"/>}/>
        <Route exact path="/service" component={()=><Service name="Service"/>}/>
        <Route exact path="/user/:fname/:lname" component={User}/>
        <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;

*/

/*
import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Menu from './RouterComponent/Menu';
import About from './RouterComponent/About';
import Contact from './RouterComponent/Contact';
import Service from './RouterComponent/Service';

const App=()=>{
  return (
    <>
      <Menu/>
      <Switch>
        <Route exact path="/" component={()=>{
          return <About name="About"/>
        }}/>
        <Route path="/contact" render={()=>{
          return <Contact name="Contact"/>
        }}/>
        <Route path="/service" component={Service}/>
        <Route component={Error}/>
      </Switch>
    </>);
}

export default App;

*/

/*
import React from 'react';
import Menu from './RouterComponent/Menu';
import About from './RouterComponent/About';
import Contact from './RouterComponent/Contact';
import {Route,Switch} from "react-router-dom";
import Error from './RouterComponent/Error';

const App=()=>{
  return (
  <>
    <Menu/>
    <Switch>
      <Route exact path="/" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route component={Error}/>
    </Switch>
  </>);
}

export default App;
*/

/*
import React from 'react';
import About from './RouterComponent/About';
import Contact from './RouterComponent/Contact';
import {Route,Switch} from "react-router-dom";
import Error from './RouterComponent/Error';

const App=()=>{
  return (
  <>
    <Switch>
      <Route exact path="/" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route component={Error}/>
    </Switch>
  </>);
}

export default App;
*/

/*
import React from 'react';
import CompA from './API Project/CompA';

const App=()=>{
  return (
    <>
      <CompA/>
    </>
  );
}

export default App;
*/

/*
import React from 'react';
import Statewise from './Statewisedata/statewise';

const App=()=>{
  return(
    <>
      <Statewise/>
    </>
  );
}

export default App;
*/

/*
import React,{useState} from 'react';
import { useEffect } from 'react';

const App=()=>{
  const state=useState();
  let [num,setnum]=useState(0);
  useEffect(()=>{
    document.title=`You Clicked ${num} times`;
  })
  

  const changeVal=()=>{
    setnum(num+1);
  }

  return(
    <>
    <button onClick={changeVal}> Click Me {num}</button>
    </>
  );
}

export default App;
*/

/*
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App=()=>{
  const state=useState();
  let [num,setnum]=useState(0);
  let [nums,setnums]=useState(0);

  useEffect(()=>{
    alert("I am Clicked");
  },[num]);
  
  return(
    <>
      <button 
        onClick={()=>{setnum(num++)}}>
          Click {num}
      </button>

      <button 
        onClick={()=>{setnums(nums++)}}>
          Click {nums}
      </button>
    </>
  )
}

export default App;
*/

/*

//Context API,useContext() Hook
import React,{createContext} from 'react';
import ComponentA from './ComponentA';

const FirstName=createContext();
const LastName=createContext();

const App=()=>{
  return (
    <>
      <FirstName.Provider value={"Sunaina"}>
        <LastName.Provider value={"Garg"}>
        <ComponentA/>
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export {FirstName,LastName};


/*
So,React Hooks provides a Concept call Context

React Context API allows you to easily access data 
at different levels of the Component Tree,without passing prop to every level
*/

/*
import React,{useState} from 'react';
import Header from './GoogleKeepProject/Header';
import Footer from './GoogleKeepProject/Footer';
import CreateNote from './GoogleKeepProject/CreateNote';
import Note from './GoogleKeepProject/Note';

const App=()=>{

  const [addItem,setaddItem]=useState([]);
  const addNote=(note)=>{
    // alert("React Js");
    setaddItem((prevVal)=>{
      return [...prevVal,note];
    });

  }

  const deleteNote=(id)=>{
    setaddItem((oldVal)=>{
      oldVal.filter((currVal,index)=>{
        return index!=oldVal;
      })
    });
  };

  return(
    <>
      <div>
        <Header/>
        <CreateNote
          passNote={addNote}
        />

        {addItem.map((currVal,index)=>{
          return(<Note
            key={index}
            id={index}
            title={currVal.title}
            content={currVal.content}
            delete1={deleteNote}
          />);
        })}
        <Footer/>
      </div>
    </>
  );
}

export default App;

*/

/*
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App=()=>{
  return (
    <React.Fragment>
      <h1 className='text-center text-danger text-capitalize my-5'> Welcome Here!</h1>

      <div className="container text-center">
        <div className="row">
          <div className="col">
          <div className="card" style={{width:"18rem"}}>
            <img src="https://picsum.photos/200/100" class="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
          </div>
          <div class="col">
          <div className="card" style={{width:"18rem"}}>
            <img src="https://picsum.photos/201/100" class="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>

          </div>
        </div>
            
          </div>
          <div class="col">
          <div className="card" style={{width:"18rem"}}>
            <img src="https://picsum.photos/202/100" class="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
*/

/*
import React from 'react';
import Accordian from './AccordionProject/Accordian';

const App=()=>{
  return(
    <React.Fragment>
      <Accordian/>
    </React.Fragment>
  );
}

export default App;

*/

/*
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App=()=>{
  return(
    <React.Fragment>
      <div className='text-center'>
        <h1 className='text mt-5 text-capitalize text-danger text-bg-dark'>Welcome here!</h1>
        <button className='btn btn-primary'>Thank You</button>
        <button className='btn btn-success'>Thank You</button>
      </div>
    </React.Fragment>
  );
};

export default App;

*/

/*

import React,{useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';
import ListComponent from './ToDoListProject/ListComponent';

const App=()=>{

  const state=useState();
  const [item,setitems]=useState("");
  const [inputlist,setinputlist]=useState([]);

  const itemEvent=(event)=>{
    setitems(event.target.value);
  }

  const changeList=()=>{
    setinputlist((oldval)=>{
      return [...oldval,item];
    });
    setitems('');
  }
  

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>To Do List</h1>
          <br/>
          <input type="text" value={item}placeholder='Add an Item' onChange={itemEvent}/>
          <Button className='newBtn' onClick={changeList}>
            <AddIcon/>
          </Button>

          <br/>
          <ol>
            {inputlist.map((currVal,index)=>{
              return <ListComponent
              key={index}
              id={index} 
              text={currVal}
              />;
            })}

          </ol>
          <br/>
        </div>
      </div>
    </>
  );
}

export default App;

*/

/*
import React from 'react';
import Clock from 'react-digital-clock';

const App=()=>{
   return <Clock/>
};

export default App;
*/

/*
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import './App.css';

const App=()=>{
  const state=useState();

  let count=0;
  const [Num,setNum]=useState(count);

  const incNum=()=>{
    setNum(Num+1);
  }
  const decNum=()=>{
    if(Num>0){
      setNum(Num-1);
    }
    else{
      setNum(0);
      alert('Zero Limit Reached');
    }
  }

  return(
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>{Num}</h1>
          <div className='btn'>
              <Tooltip title='Add'>
              <Button onClick={incNum} className='btngreen'><AddIcon/></Button>
              </Tooltip>

              <Tooltip title='Delete'>
              <Button onClick={decNum} className='btnblue'><RemoveIcon/></Button>
              </Tooltip>

              // 
              Custom Components starts with Capital letter
              
              Inbuilt Component starts with small letter

              // 
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
*/

/*
//React Challenge 8
import React, { useState } from 'react';
import './App.css';

const App=()=>{
  const state=useState();

  let count=0;
  const [Num,setNum]=useState(count);

  const incNum=()=>{
    setNum(Num+1);
  }
  const decNum=()=>{
    if(Num>0){
      setNum(Num-1);
    }
    else{
      setNum(0);
      alert('Zero Limit Reached');
    }
  }

  return(
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>{Num}</h1>
          <div className='btn'>
              <button onClick={incNum}>Increment</button>
              <button onClick={decNum}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

*/

/*
// To-Do list Project using React Js
import React,{useState} from 'react';
import './App.css';
import ToDoList from './ToDoListProject/ToDoList';

const App=()=>{
  const state=useState();

  const [inputlist,setinputlist]=useState("");
  const [Items,setlistItems]=useState([]);
  const itemEvents=(event)=>{
    setinputlist(event.target.value);
  };

  const listofitems=()=>{
    setlistItems((oldItems)=>{
      return [...oldItems,inputlist];
    });
    setinputlist('');
  };
   
  const deleteItems=(id)=>{
    setlistItems((oldItems)=>{
      return oldItems.filter((arrEle,index)=>{
        return index!=id;
      })
    })
}
  
  return(
    <>  
    <div className='main_div'>
      <div className='center_div'>
        <br/>
        <h1>To Do List</h1>
        <br/>
        <input type='text' placeholder='Add a Item' onChange={itemEvents} value={inputlist}/>
        <button onClick={listofitems}>+</button>

        <ol>
          {Items.map((itemval,index)=>{
            return <ToDoList 
            key={index} 
            id={index} 
            text={itemval}
            onSelect={deleteItems}/>
          })}
        </ol>
      </div>
    </div>
  </>
  );
}

export default App;
*/

/*

//Forms in React JS
import React,{useState} from 'react';
import './App.css';

const App=()=>{

  const state=useState();
  const [fullName,setFullname]=useState({
    fname:'',
    lname:'',
    email:'',
    phoneno:'',
    gender:''
  });
  
  const inputEvent=(event)=>{
    const val=event.target.value;
    const name=event.target.name;
    setFullname((prevState)=>{
      // using spread Operator
      return{
        ...prevState,
        [name]:val,
      }
      ///////   ***********
      if(name==='fname'){
        return{
          fname:val,
          lname:prevState.lname,
          email:prevState.email,
          phoneno:prevState.phoneno,
        };
      }
      else if(name==='lname'){
        return{
          fname:prevState.fname,
          lname:val,
          email:prevState.email,
          phoneno:prevState.phoneno,
        };
      }
      else if(name==='email'){
        return{
          fname:prevState.fname,
          lname:prevState.lname,
          email:val,
          phoneno:prevState.phoneno,
        };
      }
      else if(name==='phoneno'){
        return{
          fname:prevState.fname,
          lname:prevState.lname,
          email:prevState.email,
          phoneno:val,
        };
      }
      ********  //////////
    }
  )
  };

  const btnChange=(event)=>{
    event.preventDefault();
    alert("Form Submitted Successfully");
  };


  return(
    
  <>
    <form onSubmit={btnChange}>
      <div>
        <h1>Hello {fullName.fname} {fullName.lname}  </h1>
        <p> {fullName.gender} </p>
        <p> {fullName.email} </p>
        <p>{fullName.phoneno}</p>
        <input type='text' placeholder='Enter Your first Name'  name='fname' value={fullName.fname} onChange={inputEvent}></input>
        <input type='text' placeholder='Enter Your Last Name'  name='lname' value={fullName.lname} onChange={inputEvent}></input>
        <input type='text' placeholder='Enter Your Email'  name='email' value={fullName.email} onChange={inputEvent}></input>
        <input type='text' placeholder='Enter Your Phone No.' name='phoneno' value={fullName.phoneno} onChange={inputEvent}></input>
        <input type='text' placeholder='Enter your Gender' name='gender' value={fullName.gender} onChange={inputEvent}></input>
        <br/>
        <button type='submit'>Submit 👍 </button>
      </div>
    </form>
  </>
  );
}

export default App;
*/

/*
const App=()=>{

  const state=useState();
  const [name,currname]=useState("");
  const [pswd,currpswd]=useState("");
  const [fullname,setfullname]=useState("");
  const [fullpswd,setfullpswd]=useState("");

  const inputEvent=(event)=>{
    currname(event.target.value);
  };

  const inputEvent1=(event)=>{
    currpswd(event.target.value);
  };

  const btnChange=(event)=>{
    event.preventDefault();
    setfullname(name);
    setfullpswd(pswd);

  };


  return(
    
  <>
    <form onSubmit={btnChange}>
      <div>
        <h1>Hello {fullname}{fullpswd}</h1>
        <input type='text' placeholder='Enter Your first Name' value={name} onChange={inputEvent}></input>
        <input type='text' placeholder='Enter Your Last Name' value={pswd} onChange={inputEvent1}></input>
        <br/>
        <button type='submit'>Submit 👍 </button>
      </div>
    </form>
  </>
  );
}

export default App;
*/

/*
const App=()=>{

  
  const state=useState();
  const [name,currname]=useState("");
  const [fullname,setfullname]=useState("");

  const inputEvent=(event)=>{
    currname(event.target.value);
  };

  const btnChange=(event)=>{
    event.preventDefault();
    setfullname(name);
  };


  return(
    // form default action-submit the form
  <>
    <form onSubmit={btnChange}>
      <div>
        <h1>Hello {fullname}</h1>
        <input type='text' placeholder='Enter Your Name' value={name} onChange={inputEvent}></input>
        <br/>
        <button type='submit'>Submit 👍 </button>
      </div>
    </form>
  </>
  );
}

export default App;
*/

/*
//Handling Events in React Js
import React,{useState} from 'react';
import './App.css';

const App=()=>{

  const state=useState();

  const purple='#8e44ad';
  const [bg,setbg]=useState(purple);
  let newName='Click Me';
  const [name,changename]=useState(newName);
  const changeBg=()=>{
    const red="#ad4455";
    setbg(red);
    const name1='yup😊';
    changename(name1);
  };

  const bgBack=()=>{
    const red="#8e44ad";
    setbg(red);
    const newLocal = 'Hurray 🥳';
    const name1=newLocal;
    changename(name1);
  };

  
  return(
    <>
      <div style={{backgroundColor:bg}}>
        <button onMouseEnter={changeBg} onMouseLeave={bgBack}>{name}</button>
      </div>
    </>
  )
}

export default App;
*/

/*
import React ,{useState} from 'react';
import './App.css';

const App=()=>{

  const state=useState();
  let time=new Date().toLocaleTimeString();
  const [Ctime,setCtime]=useState(time);
  setInterval(()=>{
    time=new Date().toLocaleTimeString();
    setCtime(time);
  },1000)
  return(
    <h1>{Ctime}</h1>
  );
}

export default App;

*/

/*
//Challenge 6
import React, { useState } from 'react';
import './App.css';


const App=()=>{

  const state=useState();
  const [Time,currTime]=useState(new Date().toLocaleTimeString());
  const changeDate=()=>{
    currTime(new Date().toLocaleTimeString());
  }
  return(
    <>
    <h1>{Time}</h1>
    <button onClick={changeDate}>Click Me</button>
    </>
  );
}

export default App;
*/

/*
//Hooks
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App=()=>{
  
  const state=useState();
  const [count,setCount]=useState(5);
//const [Curr Val,Updated Val]=useState(Initialised Val)
  const IncNum=()=>{
    setCount(count-1);
  }

  return (
    <>
      <div className='parentdiv'>
        <div className='h'>
          <h1>{count}</h1>
        </div>
        <div className='h'>
          <button onClick={IncNum}>Click Me</button>
        </div>
      </div>
    </>
  );
}

export default App;

*/

/*
import React from 'react';
import './CardProject/CardStyle.css';
import {Netflix,Amazon} from './CardProject/Netflix';

const favSeries='Netflix';

// ***
function FavSeries(){
    if(favSeries==='Netflix'){
        return <Netflix/>;
    }
    else{
        return <Amazon/>;
    }
}
***  //

function App(props){
    return(
        <> 
            <h1 className='Heading'>List of Top 5 Netflix series in 2020</h1> 
            <div className='NetflixCards'>
                // **  <FavSeries/> ** //
                {(favSeries==='Netflix')?<Netflix/>:<Amazon/>}
            </div>
        </>
    );
};

export default App;

*/

/*
function App(props){
    return(
        <> 
        <h1 className='Heading'>List of Top 5 Netflix series in 2020</h1> 
        <div className='NetflixCards'>
            {SData.map((val)=>{
            return(
            <Card
                key={val.id}
                imgsrc={val.imgsrc}
                link={val.link}
                height={val.height}
                width={val.width}
                sname={val.sname}
                title={val.title}
            />
            );
        })};
        </div>
    </>
    );
};

export default App;
*/

/*
import React from 'react';

function Add(a,b){
    return a+b;
}
function Sub(a,b){
    return a-b;
}
function Mul(a,b){
    return a*b;
}

function Div(a,b){
    let div=a/b;
    div=div.toFixed(3);
    return div;
}

export {Add,Sub,Mul,Div};

*/

/*
// import React from 'react';

const food_item='Maggi';
const food_item1='Macroni';

function App(){
    let food_item2='Cake';
    return food_item2;
    
}
export default food_item;
export {food_item1,App};
*/