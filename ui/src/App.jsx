import { Container } from "@mui/material";
import HomePage from "./containers/HomePage";
import "./App.css";
import AppRoutes from "./AppRoutes";
import HeaderNavbar from "./components/HeaderNavbar";
import { UserProvider } from "./stores/userStore";
import { DataProvider } from "./stores/dataStore";

function App()
{
    // VARIABLES/STATE

    // FUNCTIONS/SIDE EFFECT

    // RETURN OF OUR VISUAL STUFF
    return (
        <>
            <UserProvider username={"Guest"}>
                <DataProvider>
                    <HeaderNavbar />
                    <Container sx={{ display: "flex", height: "90vh", justifyContent: "center", backgroundColor: "#2b586b"}}>
                        <AppRoutes />
                    </Container>
                </DataProvider>
            </UserProvider>
        </>
    );
}

export default App;