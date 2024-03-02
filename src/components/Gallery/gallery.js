import React from "react";
// import Gallery from "react-photo-gallery";
import Navbar from "../Navbars/Navbar";
import Footer from "../Footer/Footer.js";
// import { photos } from "./images";
import "./gallery.css";

import g1 from "../../assets/gallery/1.jpg";
import g2 from "../../assets/gallery/2.jpg";
import g3 from "../../assets/gallery/3.jpg";
import g4 from "../../assets/gallery/4.jpg";
import g5 from "../../assets/gallery/5.jpg";
import g6 from "../../assets/gallery/6.jpg";
import g7 from "../../assets/gallery/7.jpg";
import g8 from "../../assets/gallery/8.jpg";
import g9 from "../../assets/gallery/9.jpg";
import g10 from "../../assets/gallery/10.jpg";
import g13 from "../../assets/gallery/13.jpg";
import g14 from "../../assets/gallery/14.jpg";
import g15 from "../../assets/gallery/15.jpg";
import g16 from "../../assets/gallery/16.jpg";


/* popout the browser and maximize to see more rows! -> */
const Photos = () => {
  //const [x,setX]=useState(0);
  return (
<div className="bdy">
        <Navbar />
<div className="hding">
<h1>Some Previous Year Memories</h1>
</div>

{/* 
<section className="des5">

    <div className="container2">

        <div className="circle">
            <div className="crd1"><img alt="ph" src="images/IMG_20190515_212344.jpg"/></div>
            <div className="crd2"><img alt="ph" src="images/554063_City HelloRF.jpg"/></div>
            <div className="crd3"><img alt="ph" src="images/544720_Carpathian Mountains HelloRF.jpg"/></div>
            <div className="crd4"><img alt="ph" src="images/1557114614610.jpg"/></div>
            <div className="crd5"><img alt="ph" src="images/1594993301777.jpg"/></div>
            <div className="crd6"><img alt="ph" src="images/589149_Lakeside.jpg"/></div>
          
        
        </div>
        
        </div>

</section>
 */}


<section className="gllry">
    <div className="gallary23">
  
      <div className="big_strech">
        <img alt="ph" src={g1}></img>
      </div>
      <div>
        <img alt="ph" src={g8}></img>
      </div>
      <div>
        <img alt="ph" src={g9}></img>
      </div>
     
      <div className="h_strech">
        <img alt="ph" src={g10}></img>
      </div>
     
      <div className="h_strech">
        <img alt="ph" src={g13}></img>
      </div>
     
      
      <div className="big_strech">
        <img alt="ph" src={g16}></img>
      </div>

      <div>
        <img alt="ph" src={g14}></img>
      </div>
      <div>
        <img alt="ph" src={g15}></img>
      </div>
      <div className="v_strech">
        <img alt="ph" src={g7}></img>
      </div>
      <div>
        <img alt="ph" src={g2}></img>
      </div>
      <div className="h_strech">
        <img alt="ph" src={g3}></img>
      </div>
      <div>
        <img alt="ph" src={g4}></img>
      </div>
      <div>
        <img alt="ph" src={g5}></img>
      </div>
      <div>
        <img alt="ph" src={g6}></img>
      </div>

      
    </div>
    
    </section>




      <Footer />
    </div>
  );
};

export default Photos;
