import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Hero from "../components/Hero/Hero";
import styles from "../components/Hero/Hero.module.css";
import { SERVICE_MESSAGES } from "../utils/constants";

export const Rooms = () => {
  return (
    <Hero hero={styles.roomsHero}>
      <Banner title={SERVICE_MESSAGES.ourRooms} subtitle={""}>
        <Link to="/" className="btn-primary">
        {SERVICE_MESSAGES.returnHome}
        </Link>
      </Banner>
    </Hero>
  );
};
