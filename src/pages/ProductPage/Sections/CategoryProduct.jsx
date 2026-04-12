import React from "react";
import Vegetables from "../../../components/common/Vegetables/Vegetables";
import vegies from "../../../Data/vegies";

export default function CategoryProduct() {
  return (
    
      
       <div className="grid grid-cols-3 gap-15">
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
