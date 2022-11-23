import { createContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./Css/App.css";
import "./Css/General.css";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import axios from "axios";
import Sales from "./Components/Dashboard/Sales";
import NewUser from "./Components/Pages/Users/NewUser";
import { ToastContainer } from "react-toastify";
import SignUp from "./Components/Authenticate/SignUp";
import SignIn from "./Components/Authenticate/SignIn";
import Dashboard from "./Components/Dashboard/Dashboard";
import TableData from "./Components/Pages/Profile/TableData";
import Cart from "./Components/Pages/Cart/Cart";
import CartDetails from "./Components/Pages/Cart/CartDetails";

const LayoutArea = createContext();
const CartD = createContext();
const CartAdd = createContext();

function App() {
  let baseURL = "https://api.escuelajs.co/api/v1";

  const [loader, setLoader] = useState(true);
  const [cartData, setCartData] = useState([]);
  const [loadMore, setLoadMore] = useState(12);
  const [addCart, setAddCart] = useState([]);

  const getUser = async (url) => {
    try {
      const res = await axios.get(url);
      setCartData(res.data);
      // console.log(res.data);
      setLoader(false);
      // throw new Error('something went wrong while requesting posts');
    } catch (error) {
      console.error(error);
      setLoader(false);
    }
  };

  useEffect(() => {
    getUser(`${baseURL}/products`);
  }, []);

  const [toggle, setToggle] = useState(false);
  const [bgColor, setBgColor] = useState("dark");
  const [sideNavColor, setSideNavColor] = useState("skySidenav");

  // localstorage
  const isLoggedIn = localStorage.getItem("user_Login");

  const Protected = () => {
    return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
    // if (!isLoggedIn) {
    //   return <Navigate to="/" replace />;
    // }
    // return children;
  };

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <LayoutArea.Provider
          value={[
            toggle,
            setToggle,
            bgColor,
            setBgColor,
            sideNavColor,
            setSideNavColor,
          ]}
        >
          <CartD.Provider value={[loader, cartData, loadMore, setLoadMore]}>
            <CartAdd.Provider value={[addCart, setAddCart]}>
              <Routes>
                {/* <Route element={<Protected />}> */}

                <Route path="/dashboards/analytics" element={<Dashboard />} />
                <Route path="/dashboards/sales" element={<Sales />} />
                <Route
                  path="/pages/profile/table-data"
                  element={<TableData />}
                />
                <Route path="/pages/users/new-user" element={<NewUser />} />
                <Route path="/pages/carts/cart" element={<Cart />} />
                <Route
                  path="/pages/carts/cart-details/:id"
                  element={<CartDetails />}
                />
                <Route path="*" element="Page not found" />
                {/* </Route> */}

                <Route path="/" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
              </Routes>
            </CartAdd.Provider>
          </CartD.Provider>
        </LayoutArea.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { CartD, CartAdd, LayoutArea };
