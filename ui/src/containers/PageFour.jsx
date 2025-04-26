import { Typography, Box } from "@mui/material";
import { useSearchParams } from "react-router-dom"

function PageFour()
{
    // VARIABLES/STATE LIVE HERE
    const [searchParams] = useSearchParams();
    const searchParamOfSomething = searchParams.get("id");

    // FUNCTIONS/EFFECTS LIVE HERE

    // RETURN LIVES HERE
    return (
        <Box>
            <Typography>This is page four</Typography>
            <Typography>{searchParamOfSomething}</Typography>
        </Box>
    );
};

export default PageFour;