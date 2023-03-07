import { SERVICE_MESSAGES } from "../../utils/constants";
import { IR, IRooms } from "../../utils/types";
import styles from "./Room.module.css";
import defaultImg from "../../images/room-1.jpeg";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Room(props: IRooms) {
  const { room } = props;
  const roomMain: IR = room as unknown as IR;
  return (
    <article className={styles.room}>
      <div className={styles.imgContainer}>
        <img
          src={roomMain.images[0] || defaultImg}
          alt={SERVICE_MESSAGES.singleRoom}
        />
        <div className={styles.priceTop}>
          <h6>${roomMain.price}</h6>
          <p>{SERVICE_MESSAGES.perNight}</p>
        </div>
        <Link
          to={`/rooms/${roomMain.slug}`}
          className={`btnPrimary ${styles.roomLink}`}
        >
          {SERVICE_MESSAGES.features}
        </Link>
      </div>
      <p className={styles.roomInfo}>{roomMain.name}</p>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  })
}