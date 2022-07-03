import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const ProductCard = ({ productDetails, removeFromCart }) => {
  return (
    <Card sx={{ maxWidth: 300, background: "whitesmoke", borderRadius: 5 }}>
      <Box sx={{ width: "100%", py: 2, background: "white", display: "flex" }}>
        <CardMedia
          sx={{ height: 320, width: 250, mx: "auto" }}
          component="img"
          image={productDetails.image}
          alt="green iguana"
        />
      </Box>
      <CardContent sx={{ padding: 4, paddingBottom: 0, textAlign: "center" }}>
        <Typography
          sx={{ fontSize: 17 }}
          gutterBottom
          variant="h6"
          component="h6"
        >
          {productDetails.title}
        </Typography>
        <Typography
          sx={{ fontWeight: "bold" }}
          gutterBottom
          variant="h6"
          component="h6"
        >
          <Typography sx={{ textDecoration: "line-through" }} component="span">
            ₹{productDetails.mrp}
          </Typography>{" "}
          ₹{productDetails.price}
        </Typography>

        <Stack spacing={0.7}>
          <Rating
            sx={{ fontSize: 30, margin: "0 auto" }}
            name="half-rating"
            value={productDetails.ratings}
            precision={0.1}
            readOnly
          />
          <Typography
            sx={{ fontSize: 16, fontWeight: "bold" }}
            variant="p"
            color="text.secondary"
          >
            Ratings: {productDetails.ratings}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ display: "flex", padding: 2 }}>
        <Button
          sx={{ flexGrow: 1 }}
          variant="contained"
          size="small"
          onClick={() => {
            removeFromCart(productDetails.id);
          }}
        >
          Remove from Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
