import Typography from "@mui/material/Typography";
import { FooterBox } from "./StyledComponents";

function Footer() {
  return (
    <FooterBox>
      <Typography sx={{ fontWeight: 700 }} variant="p" component="p">
        Copyright © Shoppy 2022
      </Typography>
    </FooterBox>
  );
}

export default Footer;
