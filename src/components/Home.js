import React from 'react';
import BsStuff from './BsStuff';
import Poster from './Poster';
import "../components/Home.css";
import Carousel from 'react-bootstrap/Carousel'

const Home = () => {
    return (
        
        <div className="Home text-center mb-8">
            <div>
                <p className="Title" style={{font:"30px"}}>Buddies Canteen</p>
                <img src="https://i.gifer.com/X2B8.gif" width="94" height="70"/>
                <img src="https://bestanimations.com/media/food/690171314taco-animated-gif.gif" width="94" height="70"/>
                <img src="http://cdn3.vox-cdn.com/uploads/chorus_asset/file/704658/tumblr_m6oolzvXsJ1qfvx4yo1_500.0.gif" width="94" height="70"/>
                <img src="https://acegif.com/wp-content/uploads/spaghetti.gif" width="94" height="70"/>
            {/* <Poster/> */}
            {/* <BsStuff/> */}
            </div>

        </div>
     
    );
}

export default Home;
