import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Hero from "../components/Hero/Hero";
import styles from "../components/Hero/Hero.module.css";
import Services from "../components/Services/Services";
import { SERVICE_MESSAGES } from "../utils/constants";

export const Home = () => {
  return (
    <>
      <Hero hero={styles.defaultHero}>
        <Banner
          title={SERVICE_MESSAGES.luxuriousRooms}
          subtitle={SERVICE_MESSAGES.deluxRooms}
        >
          <Link to="/rooms" className="btn-primary">
            {SERVICE_MESSAGES.ourRooms}
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
};
