import { Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductContext";

function ProductList() {
  const { updateRatings, products, cartOps } = useProducts();

  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          padding: 4,
          paddingTop: 4,
          fontWeight: "bold",
        }}
        variant="h3"
        component="h3"
      >
        All Products
      </Typography>
      <Grid container spacing={6} sx={{ justifyContent: "center", padding: 4 }}>
        {products.map((product) => (
          <Grid item key={product.id}>
            <ProductCard
              productDetails={product}
              updateRatings={updateRatings}
              addToCart={cartOps.addToCart}
              isProductInCart={cartOps.isProductInCart}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ProductList;
