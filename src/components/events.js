import styles from "./events.module.css";
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import Head from 'next/head'
import React, { useEffect, useState } from "react";

import EventItem from "./EventItem/index";
import Navbar from "./Navbars/Navbar";
import Footer from "./Footer/Footer";
import { serverUrl } from "config";

const Events = () => {
	const [events, setEvents] = useState([
		{
			imageUrl: "https://as1.ftcdn.net/v2/jpg/02/71/92/86/1000_F_271928620_XDDsxZiYWyox3EAi5CZ6RbbchWcPmQzA.jpg",
			name: "Case Study: Radioactive Pollutants in Ground Water",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-16-03 00:00:00"),
			end_time: new Date("2024-17-03 11:59:00"),
			team_size: 4,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 0,
			organizers: [["Priyadarshni Sinha", "9969346881"],["Saloni Bauddh", "7668450152"]],
        		rulebookUrl : "https://docs.google.com/document/d/1a8S1lmIs_Y2WUml3Ns6xN4THQ2vhZLeVDKNlPwwBG0/edit?usp=sharing",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSclhZ2RlrC9izYNXFGpK-Aj2JiSsUIeOU6rAuvn9W1eq35aIA/viewform?usp=sf_link",
		},
		{
			imageUrl: "https://as1.ftcdn.net/v2/jpg/02/71/92/86/1000_F_271928620_XDDsxZiYWyox3EAi5CZ6RbbchWcPmQzA.jpg",
			name: "Case Study: Innovative paths to net zero",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-16-03 00:00:00"),
			end_time: new Date("2024-17-03 11:59:00"),
			team_size: 4,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 0,
			organizers: [["Priyadarshni Sinha", "9969346881"],["Saloni Bauddh", "7668450152"]],
        		rulebookUrl : "https://docs.google.com/document/d/1a8S1lmIs_Y2WUml3Ns6xN4THQ2vhZLeVDKNlPwwBG0/edit?usp=sharing",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSclhZ2RlrC9izYNXFGpK-Aj2JiSsUIeOU6rAuvn9W1eq35aIA/viewform?usp=sf_link",
		},
{
			imageUrl: "https://as1.ftcdn.net/v2/jpg/02/71/92/86/1000_F_271928620_XDDsxZiYWyox3EAi5CZ6RbbchWcPmQzA.jpg",
			name: "Case Study: ???",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-16-03 00:00:00"),
			end_time: new Date("2024-17-03 11:59:00"),
			team_size: 4,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 0,
			organizers: [["Priyadarshni Sinha", "9969346881"],["Saloni Bauddh", "7668450152"]],
        		rulebookUrl : "https://docs.google.com/document/d/1a8S1lmIs_Y2WUml3Ns6xN4THQ2vhZLeVDKNlPwwBG0/edit?usp=sharing",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSclhZ2RlrC9izYNXFGpK-Aj2JiSsUIeOU6rAuvn9W1eq35aIA/viewform?usp=sf_link",
		},
		{
			imageUrl: "https://as1.ftcdn.net/v2/jpg/02/71/92/86/1000_F_271928620_XDDsxZiYWyox3EAi5CZ6RbbchWcPmQzA.jpg",
			name: "Case Study: ???",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-16-03 00:00:00"),
			end_time: new Date("2024-17-03 11:59:00"),
			team_size: 4,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 0,
			organizers: [["Priyadarshni Sinha", "9969346881"],["Saloni Bauddh", "7668450152"]],
        		rulebookUrl : "https://docs.google.com/document/d/1a8S1lmIs_Y2WUml3Ns6xN4THQ2vhZLeVDKNlPwwBG0/edit?usp=sharing",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSclhZ2RlrC9izYNXFGpK-Aj2JiSsUIeOU6rAuvn9W1eq35aIA/viewform?usp=sf_link",
		},
		{
			imageUrl: "https://deeepkk.github.io/samnivesha/src/assets/Events/modelexhibition.jpeg",
			name: "MODEL EXHIBITION",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-16-03 00:00:00"),
			end_time: new Date("2024-17-03 11:59:00"),
			team_size: 5,
			registration_fee: 5000,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 15000,
			organizers: [["Saloni Bauddh", "7668450152"]],
        		rulebookUrl : "https://docs.google.com/document/d/1jagbe8Pvq6i4AYQ7X6BkzGRvMYgXtfYv8r_-33uRQUg/edit?usp=sharing",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSdKZq-zutWfS2dzuat-Smbu2tR4r3Jgs8KZ74bSjU_tJ9XQmQ/viewform?usp=sf_link",
		},
		{
			imageUrl: "https://deeepkk.github.io/samnivesha/src/assets/Events/civiq.jpeg",
			name: "CIVIQ",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-16-03 00:00:00"),
			end_time: new Date("2024-17-03 11:59:00"),
			team_size: 2,
			registration_fee: 3000,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 15000,
			organizers: [["Sachin Singh", "9956677001"]],
        		rulebookUrl : "https://docs.google.com/document/d/14MBkE-uBxYcnKAdrr-IS91x-jbg6tU6mJ8kAcFZ0FP4/edit?usp=sharing",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSdJn99OOqeb6Mfl6TCogPeybKKiFhXcmTCBcmqBQ3wVlS7GAw/viewform?usp=sf_link",
		},
		{
			imageUrl: "https://deeepkk.github.io/samnivesha/src/assets/Events/codeit.jpeg",
			name: "CODE.IT",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-16-03 00:00:00"),
			end_time: new Date("2024-17-03 11:59:00"),
			team_size: 2,
			registration_fee: 3000,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 15000,
			organizers: [["Shravani", "6300146797"]],
        		rulebookUrl : "https://docs.google.com/document/d/1IDtPeeF5qGbsGL3qPSUPRCjUtb7cITcMlJigOUdyrd8/edit?usp=sharing",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSeaDnr50eI5iWjeVK1qmyP5jnBGBpPb470yWuIoR6h3ZL7Gdg/viewform?usp=sf_link",
		},
		{
			imageUrl: "https://deeepkk.github.io/samnivesha/src/assets/Events/bridgeitup.jpeg",
			name: "BRIDGE IT UP",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-16-03 00:00:00"),
			end_time: new Date("2024-17-03 11:59:00"),
			team_size: 4,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 3000,
			organizers: [["Sachin Singh", "9956677001"]],
        		rulebookUrl : "#",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSfUUL59O0mAAEqyOJvAGsGMEGJjhGRfVmMlqiNnG5FjsbrSPQ/viewform?usp=sf_link",
		}
		
		
		

	]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let host = serverUrl;

		async function callAPI() {
			try {
				const res = await fetch('${host}/events/detailed', {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const data = await res.json();
				setEvents(data.data);
			} catch (e) {
				console.error("Failed to fetch");
			} finally {
				setLoading(false);
			}
		}
		callAPI();
	}, []);
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

