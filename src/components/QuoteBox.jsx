import React from 'react';
import quotes from "../quotes.json/";
import { useState } from 'react';

/*randonize color */ 
const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871"
  ];
  

const QuoteBox = () => {
 /*randonize color */
 const randomColor = Math.floor(Math.random() * colors.length);
 const color = colors[randomColor];
 
 document.body.style = `background: ${color}`;
 
/*funcion para randonizar la app */
    const seed = Math.floor(Math.random() * quotes.length)

    const [index, setIndex] = useState(seed);
  
    const change = () => {
      const seed = Math.floor(Math.random() * quotes.length)
      setIndex(seed);
    }

    return (
        <div className='App'>
        <div className='card' style={{ color:color}}>
       
          <ul>
           <li>   
           <p><i  className='fa-solid fa-quote-left'/>  {quotes[index].quote}</p>
           </li>
           <li>
           <small>{quotes[index].author}</small>
           </li>
           <li>
           <button onClick={change} style={{color:color}} >
           </button>
           </li>
           </ul>
          
         
           

        </div>
        </div>
    );
};

export default QuoteBox;