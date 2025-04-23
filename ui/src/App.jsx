import { Container } from "@mui/material";
import HomePage from "./containers/HomePage";
import "./App.css";
import AppRoutes from "./AppRoutes";

function App()
{
    // VARIABLES/STATE

    // FUNCTIONS/SIDE EFFECT

    // RETURN OF OUR VISUAL STUFF
    return (
            <Container sx={{display: "flex", height: "90vh",}}>
                <AppRoutes />
            </Container>
    );
}

export default App;