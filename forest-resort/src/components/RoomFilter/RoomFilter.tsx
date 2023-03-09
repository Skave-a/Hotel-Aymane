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
        {/* type */}
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
        {/* capacity */}
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
        {/* price */}
        <div className={styles.formGroup}>
          <label htmlFor="price">
            {FILTER_MESSAGES.roomPrice}
            {price}
          </label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={(event) => handleChange(event)}
            className={styles.formControl}
          />
        </div>
        {/* size */}
        <div className={styles.formGroup}>
          <label htmlFor="size">{FILTER_MESSAGES.roomSize}</label>
          <div className={styles.sizeInputs}>
            <input
              type="number"
              name="minSize"
              id="size"
              onChange={(event) => handleChange(event)}
              value={minSize}
              className={styles.sizeInput}
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              onChange={(event) => handleChange(event)}
              value={maxSize}
              className={styles.sizeInput}
            />
          </div>
        </div>
        {/* extras */}
        <div className={styles.formGroup}>
          <div className={styles.singleExtra}>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={(event) => handleChange(event)}
            />
            <label htmlFor="breakfast">{FILTER_MESSAGES.breakfast}</label>
          </div>
          <div className={styles.singleExtra}>
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={(event) => handleChange(event)}
            />
            <label htmlFor="pets">{FILTER_MESSAGES.pets}</label>
          </div>
        </div>
      </form>
    </section>
  );
}
