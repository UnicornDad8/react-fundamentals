import { useState } from "react";
import style from "./ListGroup.module.css";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectedItem }: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={style["list-container"]}>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No encontramos ningun item</p>}
      <ul className={style["list-group"]}>
        {items.map((item, i) => (
          <li
            key={i}
            className={
              selectedIndex === i
                ? `${style["list-item"]} ${style["active"]}`
                : style["list-item"]
            }
            onClick={() => {
              setSelectedIndex(i);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
