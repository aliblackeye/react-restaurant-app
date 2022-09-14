import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomeScreen from "./screens/HomeScreen/HomeScreen.jsx";
import ProductScreen from "./screens/ProductScreen/ProductScreen.jsx";

import "./style.scss";
import "./responsive.scss";
import MenuScreen from "./screens/MenuScreen/MenuScreen.jsx";
import AboutScreen from "./screens/AboutScreen/AboutScreen.jsx";
import ReviewScreen from "./screens/ReviewScreen/ReviewScreen.jsx";
import ContactScreen from "./screens/ContactScreen/ContactScreen.jsx";

const burgers = [
  {
    title: "Dana Burger",
    price: "35",
    calories: "110gr / 300 Cal",
    image: "./images/menu/hamburger.png",
  },
  {
    title: "Tavuk Burger",
    price: "35",
    calories: "110gr / 300 Cal",
    image: "./images/menu/hamburger2.png",
  },
  {
    title: "King Burger",
    price: "35",
    calories: "110gr / 300 Cal",
    image: "./images/menu/hamburger.png",
  },
];

const pizzas = [
  {
    title: "Karışık Pizza",
    price: "35",
    calories: "110gr / 300 Cal",
    image: "./images/menu/pizza.png",
  },
  {
    title: "Sucuklu Pizza",
    price: "35",
    calories: "110gr / 300 Cal",
    image: "./images/menu/pizza2.png",
  },
  {
    title: "Kavurmalı Pizza",
    price: "35",
    calories: "110gr / 300 Cal",
    image: "./images/menu/pizza.png",
  },
];


const reviews = [
  { image: "https://i.pravatar.cc/300", name: "John Doe", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit!" },
  { image: "./images/review/ali.png", name: "Ali Karagöz", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit!" },
  { image: "https://i.pravatar.cc/300", name: "Jane Doe", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit!" },
]

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomeScreen burgers={burgers} pizzas={pizzas} reviews={reviews}/>}
          exact
        />
        <Route
          path="/products"
          element={<ProductScreen burgers={burgers} pizzas={pizzas} />}
        />
        <Route
          path="/menu"
          element={<MenuScreen/>}
        />
        <Route
          path="/about"
          element={<AboutScreen/>}
        />
        <Route
          path="/reviews"
          element={<ReviewScreen reviews={reviews}/>}
        />
        <Route
          path="/contact"
          element={<ContactScreen/>}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
