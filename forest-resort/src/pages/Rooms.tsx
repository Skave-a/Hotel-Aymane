import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Hero from "../components/Hero/Hero";
import styles from "../components/Hero/Hero.module.css";

export const Rooms = () => {
  return (
    <Hero hero={styles.roomsHero}>
      <Banner title={"Our Rooms"} subtitle={""}>
        <Link to="/" className="btn-primary">
        return home
        </Link>
      </Banner>
    </Hero>
  );
};
