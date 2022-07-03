import { useState, createContext, useContext, useMemo } from "react";
import { productList } from "../products";

const ProductContext = createContext();

function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState(productList);
  const [cartIds, setCartIds] = useState([]);

  const cartProducts = useMemo(
    () => products.filter((product) => cartIds.includes(product.id)),
    [cartIds, products]
  );

  function addToCart(productId) {
    setCartIds((cart) => [...cart, productId]);
  }

  function isProductInCart(id) {
    return cartIds.includes(id);
  }

  function removeFromCart(productId) {
    // remove from cart
    setCartIds((cart) => cart.filter((cartId) => cartId !== productId));
  }

  function updateRatings(id, rating) {
    // update ratings
    setProducts((products) =>
      products.map((product) =>
        product.id === id ? { ...product, ratings: rating } : product
      )
    );
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        cart: cartProducts,
        cartNumber: cartIds.length,
        cartOps: { addToCart, removeFromCart, isProductInCart },
        updateRatings,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);

export default ProductsContextProvider;
