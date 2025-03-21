import { useState } from "react";

function ListGroup() {
  let items = ["me", "myself", "i"];
  let [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  //event handler
  const handleclick = (index, event) => {
    console.log(event);
    setSelectedIndex(index);
  };

  return (
    <div>
      <h1>Hello world</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(e)=>handleclick(index,e)}
          >
            {item} {index}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListGroup;
