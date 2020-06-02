import React from "react";

export default function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color: color }}>
      {isSpecial ? <b>*</b> : null}
      {name}
    </div>
  );
}
