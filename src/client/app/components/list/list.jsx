import React from "react";
import "./list.scss";

const List = props => (
  <ul className="c-List">{props.children}</ul>
);

export default List;
