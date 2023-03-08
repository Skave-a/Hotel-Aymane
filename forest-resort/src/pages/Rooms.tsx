import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Hero from "../components/Hero/Hero";
import styles from "../components/Hero/Hero.module.css";
import RoomContainer from "../components/RoomContainer/RoomContainer";
import { defaultValue, SERVICE_MESSAGES } from "../utils/constants";

export const Rooms = () => {
  return (
    <>
      <Hero hero={styles.roomsHero}>
        <Banner title={SERVICE_MESSAGES.ourRooms} subtitle={""}>
          <Link to="/" className="btnPrimary">
            {SERVICE_MESSAGES.returnHome}
          </Link>
        </Banner>
      </Hero>
      <RoomContainer name={""} slug={""} type={""} price={0} size={0} capacity={0} pets={false} breakfast={false} featured={false} description={""} extras={[]} images={[]} id={""} />
    </>
  );
};
