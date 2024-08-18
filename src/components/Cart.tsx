import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import CustomTable from "../table/CustomTable";
import { columns } from "../constants";
import { useNavigate } from "react-router-dom";

export type ColumnType = {
  header: string;
  key: string;
}[];

const Cart = () => {
  const {
    cartItems = [],
    subTotal = 0,
    discounts = 0,
    totalPrice = 0,
  } = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}
      >
        <button onClick={() => navigate("/products")}>Go Back</button>
      </div>

      <h2 style={{ width: "100%", textAlign: "center" }}>Cart</h2>

      {cartItems?.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "2rem",

            boxShadow: "0 0 4px 1px var(--card-shadow)",
            borderRadius: "10px",
          }}
        >
          <CustomTable columns={columns} data={cartItems} />
          <hr style={{ width: "100%" }} />
          {cartItems?.length > 0 && (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <p
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                Sub Total:{" "}
                <span style={{ marginRight: "5rem" }}>{subTotal}</span>
              </p>
              <p
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                Discount:{" "}
                <span style={{ marginRight: "5rem" }}>{`${discounts}%`}</span>
              </p>
              <p
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                Total Price:{" "}
                <span style={{ marginRight: "5rem" }}>{totalPrice}</span>
              </p>
            </div>
          )}
        </div>
      ) : (
        <p>No Items in the Cart</p>
      )}
    </>
  );
};

export default Cart;
