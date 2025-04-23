import { Container } from "@mui/material";
import HomePage from "./containers/HomePage";
import "./App.css";
import AppRoutes from "./AppRoutes";
import HeaderNavbar from "./components/HeaderNavbar";

function App()
{
    // VARIABLES/STATE

    // FUNCTIONS/SIDE EFFECT

    // RETURN OF OUR VISUAL STUFF
    return (
        <>
            <HeaderNavbar />
            <Container sx={{ display: "flex", height: "90vh", }}>
                <AppRoutes />
            </Container>
        </>
    );
}

export default App;