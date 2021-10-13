import React from 'react';
//import { Jumbotron, Container } from 'reactstrap';
import '../App.css';
 
const Poster = (props) => {
  
  
  return (
     <div>
        <marquee behavior="scroll" direction="left">
           <img src="https://media3.giphy.com/media/KfxPgR9Xb6lRvlFa8x/giphy.gif?cid=790b761197906c770beaf8a5670f573f2cd796cdf673956c&rid=giphy.gif&ct=s" width="94" height="88" alt="Food"/>
        </marquee>
        
     </div>
   );
}
 
export default Poster;