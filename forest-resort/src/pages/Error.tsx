import React from 'react'
import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Hero from "../components/Hero/Hero";
import styles from "../components/Hero/Hero.module.css";

export const Error = () => {
  return (
    <Hero hero={styles.roomsHero}>
      <Banner title={"404"} subtitle={"Page not found"}>
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  )
}
