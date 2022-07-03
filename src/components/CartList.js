import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CartCard from "./CartCard.js";
import { useProducts } from "../context/ProductContext.js";

function CartList() {
  const { cart, cartOps } = useProducts();

  return cart?.length ? (
    <Grid container spacing={4} sx={{ justifyContent: "center", padding: 4 }}>
      {cart.map((product) => (
        <Grid item key={product.id}>
          <CartCard
            productDetails={product}
            removeFromCart={cartOps.removeFromCart}
          />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Typography
      sx={{
        textAlign: "center",
        padding: 4,
        paddingTop: 4,
        fontWeight: "bold",
      }}
      variant="h4"
      component="h4"
    >
      No products in cart
    </Typography>
  );
}

export default CartList;
