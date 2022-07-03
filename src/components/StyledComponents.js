import { styled } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";

export const PosterBox = styled(MuiBox)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "35vh",
  background: "#202529",
  color: "white",
}));

export const FooterBox = styled("footer")(() => ({
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1.5em 1em",
  background: "#202529",
  color: "white",
  position: "fixed",
  bottom: 0,
}));

export const MainBox = styled("main")(() => ({
  marginBottom: 50,
}));
