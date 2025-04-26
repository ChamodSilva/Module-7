import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useUserContext } from "../stores/userStore";

function PageThree()
{
    // VARIABLES/STATE LIVE HERE
    const { currentUser } = useUserContext();
    const { id } = useParams();

    // FUNCTIONS/EFFECTS LIVE HERE
    function displayUserGreeting()
    {
        if(currentUser)
        {
            return `Hello ${currentUser}, `;
        }
    };

    // RETURN LIVES HERE
    return (
        <Box>
            <Typography>{displayUserGreeting()}This is page three</Typography>
            <Typography>{id}</Typography>
        </Box>
    );
};

export default PageThree;