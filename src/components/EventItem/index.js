// import Image from "../Image"
import styles from './eventitem.module.css'
import defaultPoster from "../../assets/img/RegisterImage.webp";
// import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Index = ({ event }) => {
    const [modal, setModal] = useState(false)

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    position: 'relative',
                }}
                onClick={() => setModal(true)}
            >
                <div className={styles.imageWrap}>
                    <div className={styles.item}>
                        <img
                            src={
                                event.imageUrl
                                    ? event.imageUrl
                                    : defaultPoster
                            }
                            alt="Fest Poster"
                            width={300}
                            style={{ borderRadius: 15, aspectRatio: "1" }}
                            objectfit={'contain'}
                        />
                    </div>
                    <p className={styles.img__description}>
                        {/* <span style={{ marginBottom: '10px' }}>
                            <Image
                                src="/events/Vector.png"
                                width={70}
                                height={70}
                                alt="Fest Image overlay"
                            />
                        </span>{' '} */}
                    </p>
                </div>
                <div className={styles.eventName}>{event.name}</div>
            </div>
        </>
    )
}

export default Index

