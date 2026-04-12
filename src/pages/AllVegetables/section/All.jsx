import React from "react";
import Vegetables from "../../../components/common/Vegetables/Vegetables";
import vegies from "../../../Data/vegies";

function All() {
  return (
    <div className="grid grid-cols-4 gap-15">
      {vegies.map((item) => {
        return (
          <Vegetables
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </div>
  );
}

export default All;
