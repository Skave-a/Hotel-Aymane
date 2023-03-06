import React from 'react'
import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Hero from "../components/Hero/Hero";
import styles from "../components/Hero/Hero.module.css";
import { SERVICE_MESSAGES } from '../utils/constants';

export const Error = () => {
  return (
    <Hero hero={styles.roomsHero}>
      <Banner title={"404"} subtitle={SERVICE_MESSAGES.pageNotFound}>
        <Link to="/" className="btn-primary">
          {SERVICE_MESSAGES.returnHome}
        </Link>
      </Banner>
    </Hero>
  )
}
