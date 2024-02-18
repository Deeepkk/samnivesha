import React from "react";
// import abc2 from "../../assets/img/ryan.jpg";
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import "./sponsors.css";
import { Link } from "react-router-dom";


const Sponsors = () => {
  return (
    <div className="spbg">
      {/* <div className="sp-main"> */}
      <Navbar />
      <br></br> <br></br> <br></br> <br></br> <br></br>
      <h1 className="sp-head">Sponsors</h1>
      <br></br> <br></br>
      <div className="sp-slider" style={{ "background-image": "url()" }}>
        <br />
        <br />

        <h1 className=""> THIS YEAR SPONSORS! </h1>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>Samnivesha</h5>
                <h2>Key Sponsors</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="#">
                        <img src="https://as1.ftcdn.net/v2/jpg/02/71/92/86/1000_F_271928620_XDDsxZiYWyox3EAi5CZ6RbbchWcPmQzA.jpg" />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    <p>JK TYRE</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>

                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="#">
                        <img src="https://as1.ftcdn.net/v2/jpg/02/71/92/86/1000_F_271928620_XDDsxZiYWyox3EAi5CZ6RbbchWcPmQzA.jpg" />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

              </div>
      <Footer />
    </div>
  );
};

export default Sponsors;
