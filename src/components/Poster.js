import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PosterBox } from "./StyledComponents.js";

function Poster() {
  return (
    <Box>
      <PosterBox>
        <Typography sx={{ fontWeight: 700 }} variant="h3" component="h3">
          Shop in Style
        </Typography>
        <Typography variant="h5" component="h5">
          With this homepage
        </Typography>
      </PosterBox>
    </Box>
  );
}

export default Poster;
