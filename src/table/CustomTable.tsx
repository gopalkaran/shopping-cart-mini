import { useDispatch } from "react-redux";
import { ColumnType } from "../components/Cart";
import { ProductType } from "../store/reducers/cart";
import "../styles/cart.css";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/actions/cart";

const CustomTable = ({
  columns,
  data,
}: {
  columns: ColumnType;
  data: ProductType[];
}) => {
  const dispatch = useDispatch();
  function handleIncrement(itemName: string) {
    dispatch(increaseQuantity(itemName));
  }
  function handleDecrement(itemName: string) {
    dispatch(decreaseQuantity(itemName));
  }
  function handleRemove(itemName: string) {
    dispatch(removeFromCart(itemName));
  }
  return (
    <table width={"70%"} className="responsiveTable">
      <thead className={"tableHeader"}>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody className={"tableBody"}>
        {data?.map((row: ProductType, rowIndex) => (
          <tr key={rowIndex} className="row-style">
            {columns.map((column, columnIndex) => {
              return column.header === "Item" ? (
                <td
                  key={columnIndex}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="item-cell"
                >
                  <img src={row.image} alt={row.name} height={"150px"} />
                  <p>{row.name}</p>
                </td>
              ) : column.header === "Quantity" ? (
                <td className="quantity-cell">
                  <button
                    style={{ padding: "0 10px" }}
                    onClick={() => handleDecrement(row.name)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={row.quantity}
                    style={{ width: "50px" }}
                  />
                  <button
                    style={{ padding: "0 10px" }}
                    onClick={() => handleIncrement(row.name)}
                  >
                    +
                  </button>
                </td>
              ) : column.key === "deleteItem" ? (
                <td className="delete-cell">
                  <button onClick={() => handleRemove(row.name)}>Remove</button>
                </td>
              ) : (
                <td key={columnIndex}>{row[column.key]}</td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
