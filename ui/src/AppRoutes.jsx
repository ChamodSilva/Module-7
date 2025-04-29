import HomePage from "./containers/HomePage";
import { Routes, Route } from "react-router-dom";
import LabOne from "./containers/LabOne";
import LabTwo from "./containers/LabTwo";
import LabThree from "./containers/LabThree";

function AppRoutes(props)
{
    return (
        <Routes>
            {/* index matches on default/home URL: / */}
            <Route index element={<HomePage />} />

            <Route path="/lab-one" element={<LabOne />} />

            <Route path="/lab-two" element={<LabTwo />} />
            
            <Route path="/lab-three" element={<LabThree />} />

            {/* special route to handle if none of the above match */}
            {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
    );
}
export default AppRoutes;