import React, { Fragment } from "react";
import classes from "./MeetupDatail.module.css";

const MeetupDatials = (props) => {
  console.log(props);
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title}></img>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.addressdescription}</p>
    </section>
  );
};

export default MeetupDatials;
