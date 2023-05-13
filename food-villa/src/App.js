import React from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}>
    <Route path="/" element={<Body />} /> 
    <Route path="/about" element={<About />} /> 
    <Route path="/contact" element={<Contact />} /> 
    <Route path="/restaurant/:id" element={<RestaurantInfo />} /> 
  </Route>)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
