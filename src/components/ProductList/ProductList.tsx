import { useEffect, useState } from "react";
import style from "./ProductList.module.css";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching products in ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
