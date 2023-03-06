import React from "react";
import { SERVICE_MESSAGES, Title_Services } from "../../utils/constants";
import Title from "../Title/Title";
import styles from "./Services.module.css";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCocktail />,
      title: Title_Services.cocktails,
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugiat, aliquam id itaque odit numquam aspernatur. Quis quaerat pariatur incidunt molestiae obcaecati? Quaerat nostrum eaque omnis est aliquid eius quis!",
    },
    {
      icon: <FaHiking />,
      title: Title_Services.endless,
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugiat, aliquam id itaque odit numquam aspernatur. Quis quaerat pariatur incidunt molestiae obcaecati? Quaerat nostrum eaque omnis est aliquid eius quis!",
    },
    {
      icon: <FaShuttleVan />,
      title: Title_Services.shuttle,
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugiat, aliquam id itaque odit numquam aspernatur. Quis quaerat pariatur incidunt molestiae obcaecati? Quaerat nostrum eaque omnis est aliquid eius quis!",
    },
    {
      icon: <FaBeer />,
      title: Title_Services.beer,
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugiat, aliquam id itaque odit numquam aspernatur. Quis quaerat pariatur incidunt molestiae obcaecati? Quaerat nostrum eaque omnis est aliquid eius quis!",
    },
  ];
  return (
    <section className={styles.services}>
      <Title title={SERVICE_MESSAGES.services} />
      <div className={styles.servicesCenter}>
        {services.map((item, i) => {
          return (
            <article key={i} className={styles.service}>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
