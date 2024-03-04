import styles from "./events.module.css";
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import Head from 'next/head'
import React, { useState } from "react";

import EventItem from "./EventItem/index";
import Navbar from "./Navbars/Navbar";
import Footer from "./Footer/Footer";

const Events = () => {
	const [events, setEvents] = useState([
		{
			imageUrl: "https://deeepkk.github.io/samnivesha/src/assets/Events/cs1.jpeg",
			name: "Case Study: Radioactive Pollutants in Ground Water",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-03-16 00:00:00"),
			end_time: new Date("2024-03-17 11:59:00"),
			team_size: 4,
			registration_deadline: new Date("2024-03-09 23:59:00"),
			prize: 15000,
			organizers: [["Priyadarshni Sinha", "9969346881"],["Saloni Bauddh", "7668450152"]],
        		rulebookUrl : "https://drive.google.com/drive/folders/16_y9hK4q5zFrNo_hTKeaacGKchndZrjp",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSclhZ2RlrC9izYNXFGpK-Aj2JiSsUIeOU6rAuvn9W1eq35aIA/viewform?usp=sf_link",
		},
		{
			imageUrl: "https://deeepkk.github.io/samnivesha/src/assets/Events/cs2.jpeg",
			name: "Case Study: Innovative paths to net zero",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-03-16 00:00:00"),
			end_time: new Date("2024-03-17 11:59:00"),
			team_size: 4,
			registration_deadline: new Date("2024-03-09 23:59:00"),
			prize: 15000,
			organizers: [["Priyadarshni Sinha", "9969346881"],["Saloni Bauddh", "7668450152"]],
        		rulebookUrl : "https://drive.google.com/drive/folders/1aGude75mIoelfpE5DwO9O8i8QZKGKoeQ?usp=sharing",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSfmkmHbIZCwV80fOUf_Ez4EJuts5b6B8feOZLDE0LR1yiaagQ/viewform?usp=sf_link",
		},

		{
			imageUrl: "https://deeepkk.github.io/samnivesha/src/assets/Events/modelexhibition.jpeg",
			name: "MODEL EXHIBITION",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-03-16 00:00:00"),
			end_time: new Date("2024-03-17 11:59:00"),
			team_size: 5,
			registration_deadline: new Date("2024-03-09 23:59:00"),
			prize: 5000,
			organizers: [["Saloni Bauddh", "7668450152"]],
        		rulebookUrl : "https://tinyurl.com/2yt2dyaf",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSdKZq-zutWfS2dzuat-Smbu2tR4r3Jgs8KZ74bSjU_tJ9XQmQ/viewform?usp=sf_link",
		},
		{
			imageUrl: "https://deeepkk.github.io/samnivesha/src/assets/Events/civiq.jpeg",
			name: "CIVIQ",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-03-16 00:00:00"),
			end_time: new Date("2024-03-17 11:59:00"),
			team_size: 2,
			registration_deadline: new Date("2024-03-09 23:59:00"),
			prize: 3000,
			organizers: [["Sachin Singh", "9956677001"]],
        		rulebookUrl : "https://tinyurl.com/kymdzh5e",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSdJn99OOqeb6Mfl6TCogPeybKKiFhXcmTCBcmqBQ3wVlS7GAw/viewform?usp=sf_link",
		},
		{
			imageUrl: "https://deeepkk.github.io/samnivesha/src/assets/Events/codeit.jpeg",
			name: "CODE.IT",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-03-16 00:00:00"),
			end_time: new Date("2024-03-17 11:59:00"),
			team_size: 2,
			registration_fee: 0,
			registration_deadline: new Date("2024-03-09 23:59:00"),
			prize: 3000,
			organizers: [["Shravani", "6300146797"]],
        		rulebookUrl : "https://tinyurl.com/ynpm4dzj",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSeaDnr50eI5iWjeVK1qmyP5jnBGBpPb470yWuIoR6h3ZL7Gdg/viewform?usp=sf_link",
		},
		{
			imageUrl: "https://deeepkk.github.io/samnivesha/src/assets/Events/bridgeitup.jpeg",
			name: "BRIDGE IT UP",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-03-16 00:00:00"),
			end_time: new Date("2024-03-17 11:59:00"),
			team_size: 4,
			registration_deadline: new Date("2024-03-09 23:59:00"),
			prize: 3000,
			organizers: [["Sachin Singh", "9956677001"]],
        		rulebookUrl : "#",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSfUUL59O0mAAEqyOJvAGsGMEGJjhGRfVmMlqiNnG5FjsbrSPQ/viewform?usp=sf_link",
		},
		{
			imageUrl: "https://deeepkk.github.io/samnivesha/src/assets/Events/houseofcards.jpeg",
			name: "HOUSE OF CARDS",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-03-16 00:00:00"),
			end_time: new Date("2024-03-17 11:59:00"),
			team_size: 3,
			registration_deadline: new Date("2024-03-09 23:59:00"),
			prize: 3000,
			organizers: [["Sakshi Priya", "7004436152"]],
        		rulebookUrl : "https://tinyurl.com/2s4bvken",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSeFFvs2GLW2WzntZrPYryExctSbuhX-VP-QhYRO-x4fuiDAgQ/viewform?usp=sf_link",
		}
		
		
		

	]);
const loading = false;
	
	return (
		<div className="spbg">
		<div className={styles.mainContainer}>
			<Navbar />
			<div style={{ height: 150, display: "unset" }}></div>
			{loading ? null : (
				<div className={styles.container}>
					<h1>Events</h1>

					<div className={styles.content}>
						{events.length === 0 && <div>Could not get data from server</div>}
						{events.map((event, index) => {
							return <EventItem event={event} key={index} />;
						})}
					</div>
				</div>
			)}
			<Footer />
		</div>
		</div>
	);
};
export default Events;

