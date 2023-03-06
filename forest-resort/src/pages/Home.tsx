import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Hero from "../components/Hero/Hero";
import styles from "../components/Hero/Hero.module.css";

export const Home = () => {
  return (
    <Hero hero={styles.defaultHero}>
      <Banner title={"luxurious rooms"} subtitle={"delux rooms starting at $299"}>
        <Link to='/rooms' className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
  );
};
