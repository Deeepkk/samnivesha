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
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 15000,
			organizers: [["Priyadarshni Sinha", "9969346881"],["Saloni Bauddh", "7668450152"]],
        		rulebookUrl : "https://tinyurl.com/mps6amcc",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSclhZ2RlrC9izYNXFGpK-Aj2JiSsUIeOU6rAuvn9W1eq35aIA/viewform?usp=sf_link",
		},
		{
			imageUrl: "https://as1.ftcdn.net/v2/jpg/02/71/92/86/1000_F_271928620_XDDsxZiYWyox3EAi5CZ6RbbchWcPmQzA.jpg",
			name: "Case Study: Innovative paths to net zero",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-16-03 00:00:00"),
			end_time: new Date("2024-17-03 11:59:00"),
			team_size: 4,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 15000,
			organizers: [["Priyadarshni Sinha", "9969346881"],["Saloni Bauddh", "7668450152"]],
        		rulebookUrl : "https://tinyurl.com/mps6amcc",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSfmkmHbIZCwV80fOUf_Ez4EJuts5b6B8feOZLDE0LR1yiaagQ/viewform?usp=sf_link",
		},
{
			imageUrl: "https://as1.ftcdn.net/v2/jpg/02/71/92/86/1000_F_271928620_XDDsxZiYWyox3EAi5CZ6RbbchWcPmQzA.jpg",
			name: "Case Study: ???",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-16-03 00:00:00"),
			end_time: new Date("2024-17-03 11:59:00"),
			team_size: 4,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 15000,
			organizers: [["Priyadarshni Sinha", "9969346881"],["Saloni Bauddh", "7668450152"]],
        		rulebookUrl : "https://tinyurl.com/mps6amcc",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSd_1-UkmFqEXLWIMTgTOBMltYtk6Cf43Y312FRyPsnKFY2G5Q/viewform?usp=sf_link",
		},
		{
			imageUrl: "https://as1.ftcdn.net/v2/jpg/02/71/92/86/1000_F_271928620_XDDsxZiYWyox3EAi5CZ6RbbchWcPmQzA.jpg",
			name: "Case Study: ???",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-16-03 00:00:00"),
			end_time: new Date("2024-17-03 11:59:00"),
			team_size: 4,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 15000,
			organizers: [["Priyadarshni Sinha", "9969346881"],["Saloni Bauddh", "7668450152"]],
        		rulebookUrl : "https://tinyurl.com/mps6amcc",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSewhVmYWvdlrSgf6wOOy2eSDz_voWu8x4QStQ-3pa07FC2gbA/viewform?usp=sf_link",
		},
		{
			imageUrl: "https://deeepkk.github.io/samnivesha/src/assets/Events/modelexhibition.jpeg",
			name: "MODEL EXHIBITION",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-16-03 00:00:00"),
			end_time: new Date("2024-17-03 11:59:00"),
			team_size: 5,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 5000,
			organizers: [["Saloni Bauddh", "7668450152"]],
        		rulebookUrl : "https://tinyurl.com/2yt2dyaf",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSdKZq-zutWfS2dzuat-Smbu2tR4r3Jgs8KZ74bSjU_tJ9XQmQ/viewform?usp=sf_link",
		},
		{
			imageUrl: "https://deeepkk.github.io/samnivesha/src/assets/Events/civiq.jpeg",
			name: "CIVIQ",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-16-03 00:00:00"),
			end_time: new Date("2024-17-03 11:59:00"),
			team_size: 2,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 4000,
			organizers: [["Sachin Singh", "9956677001"]],
        		rulebookUrl : "https://tinyurl.com/kymdzh5e",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSdJn99OOqeb6Mfl6TCogPeybKKiFhXcmTCBcmqBQ3wVlS7GAw/viewform?usp=sf_link",
		},
		{
			imageUrl: "https://deeepkk.github.io/samnivesha/src/assets/Events/codeit.jpeg",
			name: "CODE.IT",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-16-03 00:00:00"),
			end_time: new Date("2024-17-03 11:59:00"),
			team_size: 2,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 3000,
			organizers: [["Shravani", "6300146797"]],
        		rulebookUrl : "https://tinyurl.com/ynpm4dzj",
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
		},
		{
			imageUrl: "https://deeepkk.github.io/samnivesha/src/assets/Events/houseofcards.jpeg",
			name: "HOUSE OF CARDS",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-16-03 00:00:00"),
			end_time: new Date("2024-17-03 11:59:00"),
			team_size: 3,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 3000,
			organizers: [["Sakshi Priya", "7004436152"]],
        		rulebookUrl : "https://tinyurl.com/2s4bvken",
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSeFFvs2GLW2WzntZrPYryExctSbuhX-VP-QhYRO-x4fuiDAgQ/viewform?usp=sf_link",
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

