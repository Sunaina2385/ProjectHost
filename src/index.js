import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </>,
document.getElementById("root")
);




























/*
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>
  ,document.getElementById('root')
)
*/


























/*
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './CardProject/Cards';
import SData from './CardProject/CardData';
import './CardProject/CardStyle.css';
import App from './App';


ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
*/

// ****************************************** //
/*

//
function nCard(val){
  return(
    <Card
        imgsrc={val.imgsrc}
        link={val.link}
        height={val.height}
        width={val.width}
        sname={val.sname}
        title={val.title}
    />
  );
}
//

ReactDOM.render(
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
  </>,
  document.getElementById('root')
);

*/

// ******************************************* //

/*
ReactDOM.render(
  <> 

    <h1 className='Heading'>List of Top 5 Netflix series in 2020</h1> 

    <div className='NetflixCards'>
      <Card
        imgsrc={SData[0].imgsrc}
        link={SData[0].link}
        height={SData[0].height}
        width={SData[0].width}
        sname={SData[0].sname}
        title={SData[0].title}
      />
      
      <Card
        imgsrc={SData[1].imgsrc}
        link={SData[1].link}
        height={SData[1].height}
        width={SData[1].width}
        sname={SData[1].sname}
        title={SData[1].title}
      /> 
      
      <Card
        imgsrc={SData[2].imgsrc}
        link={SData[2].link}
        height={SData[2].height}
        width={SData[2].width}
        sname={SData[2].sname}
        title={SData[2].title}
      /> 
    </div>
  
  </>,
  document.getElementById('root')
  );

*/

// ********************************************* //

/*

//Props in React Js
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './CardProject/Cards';
import './index.css';

ReactDOM.render(
<>  
  <Card 
  imgsrc="https://www.purplestonearts.in/wp-content/uploads/2021/12/Dark-Netflix-Origial-series-poster-art-1_11zon.webp" 
  title="A Netflix Original Series" 
  sname="DARK" 
  link="https://www.netflix.com/title/80100172"
  height="200px"
  width="200px"
  /> 
  <br/>
  <Card 
  imgsrc="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Stranger_Things_%28season_II%29.jpg/220px-Stranger_Things_%28season_II%29.jpg" t
  itle="A Netflix Original Series" 
  sname="Stranger Things" 
  link="https://www.netflix.com/watch/80229873?trackId=14277281"
  height="200px"
  width="200px"
  /> 
  <br/>
  <Card 
  imgsrc="https://www.pinkvilla.com/images/2022-09/whatsapp_image_2021-04-18_at_10.24.49_pm_1.jpeg" 
  title="A Netflix Original Series" 
  sname="Extra Curricular" 
  link="https://www.netflix.com/browse"
  height="200px"
  width="200px"
  /> 

</>,
document.getElementById('root')
);

*/

// ******************************************* //

/*
//Challenge 4
//Simple Calculator using React
import React from 'react';
import ReactDOM from 'react-dom';
import {Add,Sub,Mul,Div} from './App';

const style={
  border:'2px solid black',
  height:'150px',
  width:'150px',
  float:'left',
  textAlign:'center',
  paddingTop:'25px'
}

const liststyle={
  listStyleType:'none',
}

ReactDOM.render(
  <>
    <h1>Calculator</h1>
    <ul style={liststyle}>
      <li  style={style}>{Add(30,4)}</li>
      <li  style={style}>{Sub(30,4)}</li>
      <li style={style}>{Mul(30,4)}</li>
      <li style={style}>{Div(13,4)}</li>
      
    </ul>
  </>,
  document.getElementById('root'));

*/
/* ************************************************* */
/*

//Import/Export using WildCard

import React from 'react';
import ReactDOM from 'react-dom';
import * as obj from './App';

ReactDOM.render(
  <>
    <h1>Food-Items</h1>
    <ol>
        <li>Pasta</li>
        <li>{obj.default}</li>
        <li>{obj.food_item1}</li>
        <li>{obj.App()}</li>

    </ol>
  </>,
  document.getElementById('root'));



import React from 'react';
import ReactDOM from 'react-dom';
import food_item, { food_item1,App } from './App';

// *** return as Object whatever we have import *** //

ReactDOM.render(
  <>
    <h1>Food-Items</h1>
    <ol>
        <li>Pasta</li>
        <li>{food_item}</li>
        <li>{food_item1}</li>
        <li>{App()}</li>

    </ol>
  </>,
  document.getElementById('root'));*/

/*

//Components in React
import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Components/Heading';
import Para from './Components/Para';
import List from './Components/List';


ReactDOM.render(
  <>
    <Heading/>
    <Para/>
    <List/>
  </>,
  document.getElementById('root')
);

*/

/*
//Challenge 3 Mini Project

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const headingdiv={
  display:'flex',
  // backgroundColor:'pink',
  height:'200px',
  width:'400px',
  border:'2px solid black',
  textAlign:'center',
  justifyContent:'center',
  // marginLeft:'auto',
  // marginRight:'auto',
  margin:'0 auto',
  marginTop:'15%',
  marginBottom:'15%',
  borderRadius:'40px'
}

const greetCSS={};
let currDate=new Date(2020,5,5,19);
currDate=currDate.getHours();
let greeting='';
if(currDate>=1 && currDate<12){
  greeting='Good Morning';
  greetCSS.color='blue';
}
else if(currDate>=12 && currDate<19){
  greeting='Good Afternoon';
  greetCSS.color='orange';
}
else{
  greeting='Good Night';
  greetCSS.color='black';
}

ReactDOM.render(
<>
  <div style={headingdiv}>
    <h1>Hello Sir,<span style={greetCSS}>{greeting}</span></h1>
  </div>
</>,
document.getElementById('root')
);
*/


/*
let imgDiv={
  display: 'flex',
  justifyContent: 'center'
}

let img={
  height:'200px',
  width:'200px'
}

//Internal & Inline CSS in React Js
//Inline CSS
const name='Sunaina';
const img1='https://picsum.photos/200/300';
const img2='https://picsum.photos/201/301';
const img3='https://picsum.photos/202/302';
const img4='https://picsum.photos/203/303';
const link="https://www.google.com";
ReactDOM.render(
  <>
  <h1 style={{color:'red',textTransform:'capitalize',textShadow:'0px 3px 5px black',fontFamily: "'Open Sans', sans-serif",margin:'100px 0px',textAlign:'center',fontWeight:'bold'}}>My Name is {name}</h1>

  <div style={imgDiv}>
    <img style={img} src={img1} alt="RandomImage"/>
    <img style={img} src={img2} alt="RandomImage"/>
    <img style={img} src={img3} alt="RandomImage"/>
    <a href={link}>
      <img src={img4} style={img} alt="RandomImage"/>
    </a>
  </div>
  </>,
  document.getElementById('root')
  );

*/

/* *************************************************** */
/*
//adding Google fonts

const name='Sunaina';
const img1='https://picsum.photos/200/300';
const img2='https://picsum.photos/201/301';
const img3='https://picsum.photos/202/302';
const img4='https://picsum.photos/203/303';
const link="https://www.google.com";

ReactDOM.render(
<>
<h1 className="heading">My Name is {name}</h1>
<div className="Img_div">
  <img src={img1} alt="RandomImage"/>
  <img src={img2} alt="RandomImage"/>
  <img src={img3} alt="RandomImage"/>
  <a href={link}>
    <img src={img4} alt="RandomImage"/>
  </a>
</div>
</>,
document.getElementById('root')
);
*/
/*
//CSS in React JS
const name='Sunaina';
const img1='https://picsum.photos/200/300';
const img2='https://picsum.photos/201/301';
const img3='https://picsum.photos/202/302';
const img4='https://picsum.photos/203/303';
const link="https://www.google.com";
ReactDOM.render(
<>
<h1 className="heading">My Name is {name}</h1>
<div className="Img_div">
  <img src={img1} alt="RandomImage"/>
  <img src={img2} alt="RandomImage"/>
  // <img src={img3} alt="RandomImage"/>
  <a href={link}>
    <img src={img4} alt="RandomImage"/>
  </a>
</div>
</>,
document.getElementById('root')
);

*/

/*
//JSX Attribute
const name='Sunaina';
const img1='https://picsum.photos/200/300';
const img2='https://picsum.photos/201/301';
const img3='https://picsum.photos/202/302';
const img4='https://picsum.photos/203/303';
const link="https://www.google.com";
ReactDOM.render(
<>
<h1 contentEditable="true">My Name is {name}</h1>
<img src={img1} alt="RandomImage"/>
<img src={img2} alt="RandomImage"/>
<img src={img3} alt="RandomImage"/>
<a href={link}>
  <img src={img4} alt="RandomImage"/>
</a>
</>,
document.getElementById('root')
);

*/
/*
//Challenge
let currDate=new Date();
ReactDOM.render(
  <>
  <h1>My Name is Sunaina</h1>
  <p>Date:{currDate.toDateString()}</p>
  <p>Time:{currDate.toLocaleTimeString()}</p>
  </>,document.getElementById('root')
);
*/

/*
//Learning Template Literals in React
const f_name='Sunaina';
const l_name='Garg';
ReactDOM.render(
  <>
  <h1>My Name is {f_name} {l_name}</h1>
  <h1>My Name is {f_name+l_name}</h1>
  <h1>My Name is {f_name+" "+l_name}</h1>
  <h1> {` My Name is ${f_name} ${l_name}`}</h1>
  <p>Random Number:{Math.random()}</p>
  </>,document.getElementById('root')
);

*/

/*
// Learning JavaScript inside JSX Elements
const f_name='Sunaina';
ReactDOM.render(
  <>
  <h1>My Name is {f_name}</h1>
  <p>Random Number:{Math.random()}</p>
  </>,document.getElementById('root')
);
*/
/*
//JSX Challenge
ReactDOM.render(
  <>
      <h1>Thapa Technical Netflix series</h1>
      <p>List of 5 Best series</p>
      <ol>
        <li>Dark</li>
        <li>Extra curricular</li>
        <li>My Holo Love</li>
        <li>My first-2 Love</li>
        <li>Mr Robot</li>
      </ol>
    </>,
    document.getElementById('root')
);

*/

/*
// ReactDOM.render(
//   <div>
//   <h1>Hello World!</h1>
//   <p>JSX</p>
//   <a href="https://www.google.com">Click</a>
//   </div>,
// document.getElementById('root'));


//In React v16 It's possible for render to return an array of Elements
// ReactDOM.render(
//   [
//   <h1>Hello World!</h1>,
//   <p>JSX</p>,
//   <a href="https://www.google.com">Click</a>
//   ],
// document.getElementById('root'));


// ReactDOM.render(
//   <div>
//   <h1>Hello World!</h1>
//   <p>JSX</p>
//   <a href="https://www.google.com">Click</a>
//   </div>,
// document.getElementById('root'));

//React.fragment
// ReactDOM.render(
//   <React.Fragment>
//   <h1>Hello World!</h1>
//   <p>JSX</p>
//   <a href="https://www.google.com">Click</a>
//   </React.Fragment>,
// document.getElementById('root'));


 
//JSX -babel convert ES6 to Javascript
// ReactDOM.render( ("h1", {
//   children: "JSX"
// }), document.getElementById('root'));

//Render Element using Javascript
// var h1=document.createElement("h1");
// h1.innerHTML="Learn ReactJs";
// document.getElementById('root').appendChild(h1);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
*/