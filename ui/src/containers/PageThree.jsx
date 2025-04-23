import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

function PageThree()
{
    // VARIABLES/STATE LIVE HERE
    const { id } = useParams();

    // FUNCTIONS/EFFECTS LIVE HERE

    // RETURN LIVES HERE
    return (
        <Box>
            <Typography>This is page three</Typography>
            <Typography>{id}</Typography>
        </Box>
    );
};

export default PageThree;