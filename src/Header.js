import React from "react";

export default function Header(props, children) {
  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
    </>
  );
}