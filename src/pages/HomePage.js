import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbars/Navbar";
import styles from "./HomePage.module.css";

class HomePage extends React.Component {

  render() {
    return (
      <div className="bg">
        <Navbar />
        <div className={styles.landing_background_verdant}>
                    <div className={styles.landing_title}>
            <h1>Samnivesha’24</h1>
            <h2>Beyond the <span>Blueprints</span></h2>
            <div>
             <p className={styles.landing_text}> 16-17 March </p> 
            </div>
          </div>
					 <div className={styles.explore_button_container}>
						<Link to="/events-page">
            <button className={styles.explore_button}>Explore Events</button></Link>
        </div>
        </div>
        <Footer marginTop={0} />
      </div>
    );
  }
}

export default withRouter(HomePage);

