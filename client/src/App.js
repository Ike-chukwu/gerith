import { Navbar } from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import SearchedResult from "./Components/SearchedResult/SearchedResult";
import Search from "./Pages/Search";
import Reservation from "./Pages/Reservation";
import { useEffect, useRef, useState } from "react";
import Cart from "./Components/Cart/Cart";
import ViewFoodPage from "./Components/ViewFoodPage/ViewFoodPage";
import Favourites from "./Pages/Favourites";
import SignIn from "./Components/SignIn/SignIn";
import Checkout from "./Components/Checkout/Checkout";
import Protected from "./Components/Protected/Protected";
import Success from "./Pages/Success";
import Cancel from "./Pages/Cancel";
import { gsap } from "gsap";

function App() {
  const [isCartActive, setCartActive] = useState(false);
  const appRef = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(appRef.current, {
        autoAlpha: 1,
        duration: 0,
        delay: 0,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="App" ref={appRef}>
      <Navbar setCartActive={setCartActive} isCartActive={isCartActive} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<ViewFoodPage />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route
          path="/favourites"
          element={
            <Protected>
              <Favourites />
            </Protected>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/checkout"
          element={
            <Protected>
              <Checkout />
            </Protected>
          }
        />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
      <Cart isCartActive={isCartActive} setCartActive={setCartActive} />
    </div>
  );
}

export default App;
