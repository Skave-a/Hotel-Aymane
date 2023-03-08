import { FILTER_MESSAGES } from "../../utils/constants";
import { IFilter, IR } from "../../utils/types";
import styles from "./RoomFilter.module.css";
import { useContext } from "react";
import { RoomContext } from "../../context";
import Title from "../Title/Title";

const getUnique = (items: IR[], value: string) => {
  return [...new Set(items.map((item) => item[value as keyof IR]))];
};

export default function RoomFilter(props: IFilter) {
  const { rooms } = props;
  const context = useContext(RoomContext);
  console.log("context", context);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  let types = getUnique(rooms, "type");
  types = [FILTER_MESSAGES.all, ...types];
  const typesA = types.map((item, i) => {
    return (
      <option value={item as string} key={i}>
        {item}
      </option>
    );
  });
  let people = getUnique(rooms, "capacity");
  const peopleA = people.map((item, i) => {
    return (
      <option value={item as string} key={i}>
        {item}
      </option>
    );
  });
  return (
    <section className={styles.filterContainer}>
      <Title title={FILTER_MESSAGES.searchRooms} />
      <form className={styles.filterForm}>
        <div className={styles.formGroup}>
          <label htmlFor="type">{FILTER_MESSAGES.roomType}</label>
          <select
            name="type"
            id="type"
            value={type}
            className={styles.formControl}
            onChange={(event) => handleChange(event)}
          >
            {typesA}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="capacity">{FILTER_MESSAGES.guest}</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className={styles.formControl}
            onChange={(event) => handleChange(event)}
          >
            {peopleA}
          </select>
        </div>
      </form>
    </section>
  );
}
