interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

import { useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  //~ State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    items.length === 0 && (
      <>
        <span className="text-danger h4">This list Is Empty</span>
        <span>
          <abbr title="Item Will Be Add In: 10days, 2hrs, 37mins">note</abbr>
        </span>
      </>
    );
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
