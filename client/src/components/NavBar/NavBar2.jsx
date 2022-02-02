import React from "react";
import {Link,BrowserRouter,Routes,Route} from "react-router-dom"
import Button from "@mui/material/Button";

const NavBar2 = ()=>{


    return (
        <div>
            {/*<BrowserRouter>*/}
            <ul>
                {/*<Routes>*/}

            {/*<Route>*/}
            {/*    <Link to='/work' >*/}
                    <li>

                        <button>HOME</button>
                        {/*<Button component={Link} to="/work">*/}
                        {/*             Click Me*/}
                        {/*        </Button>*/}
                    </li>
                {/*</Link>*/}
            {/*</Route>*/}

            {/*    </Routes>*/}
            </ul>
            {/*</BrowserRouter>*/}
        </div>
    )
}
export default NavBar2
