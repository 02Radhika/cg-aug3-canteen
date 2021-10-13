import React from "react";
import "../components/Home.css";
import slide1 from '../assets/images/Radhika.jpg';
import slide2 from '../assets/images/Neha.jpg';
import slide3 from '../assets/images/Vaish.jpg';
import slide4 from '../assets/images/Akanksha.jpg';
import slide5 from '../assets/images/Mrunal.jpg';
import slide6 from '../assets/images/Kanchan.jpg';
import slide7 from '../assets/images/b1.jpg'
import './Home.css';

const About=()=>{
    return(

       <div className="About">
           <h1 className="my-3 text-center mt-2 mb-8"> Our Team </h1>

           <div className="row">
               <div className="col-1"/>
                <div className="col-3 ">
                    <div className="card" style={{width: "18rem;"}}>
                        <img src={slide1} class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Radhika Rathi <br/> Experience-3 Years</p>
                        </div>
                    </div>
                </div>

                <div className="col-3 ">
                    <div className="card" style={{width: "18rem;"}}>
                        <img src={slide3} class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Vaishnavi Bharambe <br/> Experience-3 Years</p>
                        </div>
                    </div>
                </div>

                <div className="col-3 ">
                    <div className="card" style={{width: "18rem;"}}>
                        <img src={slide2} class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Neha Chikale <br/> Experience-4 Years</p>
                        </div>
                    </div>
                </div>
           </div>

           <div className="row my-2">
           <div className="col-1"/>
           <div className="col-3 ">
                    <div className="card" style={{width: "18rem;"}}>
                        <img src={slide4} class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Akanksha Kale <br/> Experience-4 Years</p>
                        </div>
                    </div>
                </div>

                <div className="col-3 ">
                    <div className="card" style={{width: "18rem;"}}>
                        <img src={slide5} class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Mrunal Deshmukh <br/> Experience-3.7 Years</p>
                        </div>
                    </div>
                </div>

                <div className="col-3 ">
                    <div className="card" style={{width: "18rem;"}}>
                        <img src={slide6} class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Kanchan Shamde <br/> Experience-3 Years</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="text-center"><p><p></p></p>
            <h1 style={{ color: 'black' }}>We help you take the best break possible.</h1>
            <p style={{font:"20px"}}>People can’t keep going unless they stop for a moment.People’s lives have changed. What’s important has changed, and likes have changed too. <br/> 
            One thing has stayed the same, though: good things happen when people take a break.

              That’s cemented our purpose – we bring break time to everyone.  <br/>
              We’re not just giving you a quick snack; we’re creating places, moments, and opportunities to connect, making you more productive, more innovative, and a lot happier.<br/>  
              Everyone needs a respite, a little pick-me-up, a moment to refuel, and then quickly get back to what needs to be done. We go beyond convenience by using technology <br/> 
              to continually innovate and give people what they want when they want it.
               It’s what drives our employees every day.  Each account, from a Fortune 500 company <br/>
               to a small organization, is handled with a customer-first, always friendly approach.  After all, our partners rely on us to keep people happy, revived, and moving forward. Stopping for a delicious, healthy, <br/>
               quick break is something that allows everyone to make the most of their day.

            </p>
            <h4 style={{ color: 'black' }}>For Any Quries Contact</h4>
            <p style={{font:"20px"}}>Email:BuddiesCanteen@gmail.com<br/>
            Telephone Number:0253-456789 </p>
        </div>

       
       </div>
       
    );
}

export default About;
{/* <video controls>
            <source src="https://i.gifer.com/IYF8.mp4"/>
        </video> */}
