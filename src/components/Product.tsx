import "../styles/product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cart";
import { ProductType } from "../store/reducers/cart";

const Product = ({ item }: { item: Partial<ProductType> }) => {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(item));
  }

  return (
    <div className={"card"}>
      <img src={item?.image} alt={item.name} className={"cardImg"} />
      <div className={"cardContent"}>
        <h3>{item?.name}</h3>
        <p>{item?.price}</p>
        <div className={"btnGroup"}>
          <button onClick={handleAddToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
