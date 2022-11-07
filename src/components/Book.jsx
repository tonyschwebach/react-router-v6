import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  useParams
} from "react-router-dom";


const Book = () => {

  let { title } = useParams();
  return (
    <Box>
      <Typography>{title}</Typography>
    </Box>
  );
};

export default Book
