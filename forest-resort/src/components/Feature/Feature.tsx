import styles from "./Feature.module.css";
import { Component } from "react";
import { RoomContext } from "../../context";
import { IdefaultValue } from "../../utils/types";
import Title from "../Title/Title";
import { SERVICE_MESSAGES } from "../../utils/constants";
import Loading from "../Loading/Loading";
import Room from "../Room/Room";

export default class Feature extends Component {
  static contextType = RoomContext;
  render() {
    const { loading, featuredRooms: rooms } = this.context as IdefaultValue;
    const allRooms = rooms.map((room, id) => {
      return <Room key={id} room={room} />;
    });
    return (
      <section className={styles.featuredRooms}>
        <Title title={SERVICE_MESSAGES.featuredRooms} />
        <div className={styles.featuredRoomsCenter}>
          {loading ? <Loading /> : allRooms}
        </div>
      </section>
    );
  }
}
