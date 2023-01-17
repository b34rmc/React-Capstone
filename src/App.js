import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import ProductItem from "./components/pages/ProductItem";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";
import Footer from "./components/Footer";
import CartProvider from "./components/pages/CartProvider";
import "./styles/App.scss";

// export default function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar />
//         <Route exact path="/" component={Home} />
//         <Route exact path="/products" component={Products} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//         <CartProvider>
//           <Switch>
//             <Route path="/cart" component={Cart} />
//             <Route path="/products/:id" component={ProductItem} />
//           </Switch>
//         </CartProvider>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <CartProvider>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/products/:id" component={ProductItem} />
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
