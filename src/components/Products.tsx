import image1 from "../assets/item1.jpg";
import image2 from "../assets/item2.jpg";
import image3 from "../assets/item3.jpg";
import image4 from "../assets/item4.jpg";
import image5 from "../assets/item5.jpg";
import image6 from "../assets/item6.jpg";
import image7 from "../assets/item7.jpg";
import image8 from "../assets/item8.jpg";
import image9 from "../assets/item9.jpg";
import cart from "../assets/cart.svg";
import Product from "./Product";
import "../styles/products.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { ProductType } from "../store/reducers/cart";
import { useNavigate } from "react-router-dom";

const items: Array<Partial<ProductType>> = [
  { name: "Jack & Jones", image: image1, price: 499 },
  { name: "Peter England", image: image2, price: 449 },
  { name: "FUNKY RICH", image: image3, price: 479 },
  { name: "Dennis Lingo", image: image4, price: 579 },
  { name: "Noble Monk", image: image5, price: 600 },
  { name: "Leriya Fashion", image: image6, price: 399 },
  { name: "Levi's", image: image7, price: 494 },
  { name: "CRAFT HEAVEN", image: image8, price: 879 },
  { name: "NexaFlair", image: image9, price: 489 },
];

const Products = () => {
  const { cartItems = [] } = useSelector((store: RootState) => store.cart);
  const cartCount = cartItems.reduce((acc, cur) => {
    acc = acc + cur.quantity;
    return acc;
  }, 0);
  const navigate = useNavigate();
  return (
    <div className="page">
      <div
        style={{
          height: "80px",
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            position: "relative",
            right: "100px",
            top: "10px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/shopping-cart")}
        >
          <img
            src={cart}
            alt="cart"
            height={"50px"}
            width={"50px"}
            style={{ position: "absolute" }}
          />
          <label
            style={{
              position: "absolute",
              transform: "translateX(18px) translateY(-8px)",
            }}
          >
            {cartCount}
          </label>
        </div>
      </div>
      <h2 style={{ width: "100%", textAlign: "center" }}>Products</h2>
      <div className={"gridlist"}>
        {items.map((item, index) => {
          return <Product key={index} item={item} />;
        })}
      </div>
      <div style={{ width: "100%", height: "3rem" }}></div>
    </div>
  );
};

export default Products;
