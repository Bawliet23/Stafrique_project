import React,{useState}from 'react';
import './Apropos.css';
import cf1 from '../../assets/images/co-founder1.jpg';
import cf2 from '../../assets/images/co-founder2.jpg';

function Apropos() {
    const [displayInfo,setDisplayInfo]= useState([false,false]);
    const display1=()=>{
        setDisplayInfo([!displayInfo[0],false]);
    }
    const display2=()=>{
        setDisplayInfo([false,!displayInfo[1]]);
    }
    return (
        <div className="about-container">
            <div className="about-title" ><h1>À propos de nous</h1></div>
            <div className="co-founder1-container">
                <img src={cf1} alt="" className="cf_img" onMouseOver={display1} onMouseOut={display1}/>
                <h1 className="cf-name" >ECHCHETOUKY</h1>
                <p className={displayInfo[0] ? "cf-info displayInfo": "cf-info"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, tempore! Culpa sequi ut dignissimos. Blanditiis repellendus placeat modi labore impedit maxime dolores ducimus nesciunt? Eius tenetur eum enim suscipit repudiandae?
                </p>
            </div>
            <div className="about-Society" >
                <h1>Stafrique</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, tempore! Culpa sequi ut dignissimos. Blanditiis repellendus placeat modi labore impedit maxime dolores ducimus nesciunt? Eius tenetur eum enim suscipit repudiandae?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, tempore! Culpa sequi ut dignissimos. Blanditiis repellendus placeat modi labore impedit maxime dolores ducimus nesciunt? Eius tenetur eum enim suscipit repudiandae?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, tempore! Culpa sequi ut dignissimos. Blanditiis repellendus placeat modi labore impedit maxime dolores ducimus nesciunt? Eius tenetur eum enim suscipit repudiandae?
                    
                </p>
            </div>
        
            <div className="co-founder2-container">
                <img src={cf2} alt="" className="cf_img" onMouseOver={display2} onMouseOut={display2}/>
                <h1 className="cf-name">BHAJY MOHAMMED</h1>
                <p className={displayInfo[1] ? "cf-info displayInfo": "cf-info"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, tempore! Culpa sequi ut dignissimos. Blanditiis repellendus placeat modi labore impedit maxime dolores ducimus nesciunt? Eius tenetur eum enim suscipit repudiandae?
                </p>
            </div>
         
        </div>
    )
}

export default Apropos