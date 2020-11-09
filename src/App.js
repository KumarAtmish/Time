import React from 'react';
import logo from './logo.svg';
import './App.css';
import {add ,sub, div,mult} from './Cal';

function App() {
  let curDate = new Date()
curDate = curDate.getHours();
let greeting =" ";
const cssStyle = {};

if(curDate >= 1  && curDate <= 12){
  greeting ='Good Morning';
  cssStyle.color="green";
} else if(curDate >= 12  && curDate <= 17){
  greeting = 'Good Afternoon';
  cssStyle.color="orange";
} else if(curDate >= 17  && curDate <= 20){
  greeting ='Good Evening';
  cssStyle.color="blue";
}else{
  greeting ='Good Night';
  cssStyle.color="pink";
}
return(
  <>
   <div>
     <h1>
        Hello Sir , <span style= {cssStyle}> {greeting} </span>
     </h1> 
   </div>
   <div>
   <ul>
     <li> Sum of two no is {add(40,4)}</li>
     <li> Sub of two no is {sub(30,3)}</li>
     <li> Div of two no is {div(10,3)}</li>
     <li> Mult of two no is {mult(10,3)}</li>
   </ul>
 </div>
  </>
);
}

export default App;
 