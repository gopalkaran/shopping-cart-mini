import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="products" element={<Products />} />
          <Route path="shopping-cart" element={<Cart />} />
          {/* <Route path="/login" element={<Login />} />
          <Route
            path="dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
