import styles from "./Feature.module.css";
import { Component } from "react";
import { RoomContext } from "../../context";
import { IdefaultValue } from "../../utils/types";
import { Rooms } from "../../pages/Rooms";
import Title from "../Title/Title";
import { SERVICE_MESSAGES } from "../../utils/constants";

export default class Feature extends Component {
  static contextType = RoomContext;
  render() {
    const { loading, featuredRooms: rooms } = this.context as IdefaultValue;
    const allRooms = rooms.map((room) => {
      console.log(room);
      return <Rooms key={room.sys.id} room={room} />;
    });
    return (
      <section className={styles.featuredRooms}>
        <Title title={SERVICE_MESSAGES.featuredRooms} />
        {/* <Loading /> */}
        <div className={styles.featuredRoomsCenter}>
          {/* {loading ? <Location /> : rooms} */}
        </div>
      </section>
    );
  }
}
