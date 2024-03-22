import { BrowserRouter } from "react-router-dom";

//import { AppRoutes } from "./app.routes";
//import { AuthRoutes } from "./auth.routes";

import { CreateMovie } from "../pages/CreateMovie"

export function Routes(){
    return(
        <BrowserRouter>
            <CreateMovie/>
        </BrowserRouter>
    )
}