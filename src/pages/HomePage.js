import React from "react";
import { withRouter } from "react-router";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbars/Navbar";
import styles from "./HomePage.module.css";
import heroBg from "../assets/img/LandingPageHeroBgLayer.webp";
import heroBgAlt from "../assets/img/LandingPageHeroBgLayerAlt.webp";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroBgLayer: window.innerWidth > 600 ? heroBg : heroBgAlt,
    };
  }

  onWidthChange = () => {
    window.innerWidth > 600
      ? this.setState({ heroBgLayer: heroBg })
      : this.setState({ heroBgLayer: heroBgAlt });
  };

  componentDidMount() {
    window.addEventListener("resize", this.onWidthChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWidthChange);
  }

  render() {
    return (
      <div className="bg">
        <Navbar />
        <div className={styles.landing_background_verdant}>
                    <div className={styles.landing_title}>
            <h1>Samnivesha’24</h1>
            <h2>Beyond the Blueprints</h2>
            <div>
             <p className={styles.landing_text}> 16-17 March </p> 
            </div>
          </div>
					 <div className={styles.explore_button_container}>
            <button className={styles.explore_button}>Explore Events</button>
        </div>
        </div>
        <Footer marginTop={0} />
      </div>
    );
  }
}

export default withRouter(HomePage);

