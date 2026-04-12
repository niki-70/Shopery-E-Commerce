import React from "react";
import Filters from "../../components/Filters/Filters";
import CategoryProduct from "./Sections/CategoryProduct";

export default function ProductPage() {
  return (
    <>
      <div className="flex justify-between mx-20">
        <Filters />
        <CategoryProduct />
      </div>
    </>
  );
}
