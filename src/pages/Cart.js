import Typography from "@mui/material/Typography";
import CartList from "../components/CartList";

function Cart() {
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          padding: 4,
          paddingBottom: 0,
          fontWeight: "bold",
        }}
        variant="h3"
        component="h3"
      >
        Products in Cart
      </Typography>
      <CartList />
    </>
  );
}

export default Cart;
