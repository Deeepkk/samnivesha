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
			is_active: true,
			imageUrl: "https://as1.ftcdn.net/v2/jpg/02/71/92/86/1000_F_271928620_XDDsxZiYWyox3EAi5CZ6RbbchWcPmQzA.jpg",
			name: "Coming Soon",
			// date:new Date("2023-10-10"),
			start_time: new Date("2024-16-03 00:00:00"),
			end_time: new Date("2024-17-03 11:59:00"),
			venue: "Online",
			description: "Hack it out is a dynamic online web development event aimed at fostering a developer mindset and motivating college students to actively engage in development pursuits. The event nurtures creative thinking skills and fosters teamwork, empowering students to collaborate effectively. It's a platform that ignites passion for coding and emphasizes the collective effort essential in the world of web development.",
			min_team_size: 1,
			max_team_size: 1,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 0,
			organizers: ["Coming Soon", "000"],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
      rulebookUrl : "#",
			is_solo: 1,
			registration_link: "#",
			id: "1234567890",
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

