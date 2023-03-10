import { RoomContext } from "../context";
import { useContext } from "react";

// import { Component } from "react";

// export default class SingleRoom extends Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);
//   }
//   // componentDidMount(): void {}
//   render() {
//     return <div>SingleRoom</div>;
//   }
// // }
// export type IGetRoom = (slug: string) => IR;

import { Link, useParams } from "react-router-dom";
import { defaultImg, SERVICE_MESSAGES } from "../utils/constants";
import Banner from "../components/Banner/Banner";
import { StyledHero } from "../components/Hero/StyledHero";
import styles from "./SingleRoom.module.css";

export default function SingleRoom() {
  const { slug } = useParams();
  const value = useContext(RoomContext);
  const { getRoom } = value;
  const room = getRoom(slug as string);
  if (!room) {
    return (
      <div className="error">
        <h3>{SERVICE_MESSAGES.noFound}</h3>
        <Link to="/rooms" className="btnPrimary">
          {SERVICE_MESSAGES.backToRooms}
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [mainImg, ...defaultImgs] = images;
  return (
    <>
      <StyledHero img={mainImg || defaultImg}>
        <Banner title={`${name} ${SERVICE_MESSAGES.room}`} subtitle={""}>
          <Link to="/rooms" className="btnPrimary">
            {SERVICE_MESSAGES.backToRooms}
          </Link>
        </Banner>
      </StyledHero>
      <section className={styles.singleRoom}>
        <div className={styles.singleRoomImages}>
          {defaultImgs.map((img, i) => (
            <img key={i} src={img} alt={name} />
          ))}
        </div>
        <div className={styles.singleRoomInfo}>
          <article className={styles.desc}>
            <h3>{SERVICE_MESSAGES.details}</h3>
            <p>{description}</p>
          </article>
          <article className={styles.info}>
            <h3>{SERVICE_MESSAGES.info}</h3>
            <h6>
              {SERVICE_MESSAGES.price}
              {price}
            </h6>
            <h6>
              {SERVICE_MESSAGES.size}
              {size} {SERVICE_MESSAGES.SQFT}
            </h6>
            <h6>
              {SERVICE_MESSAGES.maxCapacity} :{" "}
              {capacity > 1
                ? `${capacity} ${SERVICE_MESSAGES.people}`
                : `${capacity} ${SERVICE_MESSAGES.person}`}
            </h6>
            <h6>
              {pets
                ? SERVICE_MESSAGES.petsAllowed
                : SERVICE_MESSAGES.noPetsAllowed}
            </h6>
            <h6>{breakfast && SERVICE_MESSAGES.brekfast}</h6>
          </article>
        </div>
      </section>
      <section className={styles.roomExtras}>
        <h6>{SERVICE_MESSAGES.extras}</h6>
        <ul className={styles.extras}>
          {extras.map((item, i) => {
            return <li key={i}> - {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
}
