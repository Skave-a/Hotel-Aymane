import styles from "./RoomList.module.css";
import { SERVICE_MESSAGES } from "../../utils/constants";
import { IFilter } from "../../utils/types";
import Room from "../Room/Room";

export default function RoomList(props: IFilter) {
  const { rooms } = props;
  if (rooms.length === 0) {
    return (
      <div className="emptySearch">
        <h3>{SERVICE_MESSAGES.noSearchParameters}</h3>
      </div>
    );
  }
  return (
    <section className={styles.roomslist}>
      <div className={styles.roomslistCenter}>
        {rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
