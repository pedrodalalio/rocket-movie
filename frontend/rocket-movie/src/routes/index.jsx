import { BrowserRouter } from "react-router-dom";

//import { AppRoutes } from "./app.routes";
//import { AuthRoutes } from "./auth.routes";

import { Profile } from "../pages/Profile"

export function Routes(){
    return(
        <BrowserRouter>
            <Profile/>
        </BrowserRouter>
    )
}