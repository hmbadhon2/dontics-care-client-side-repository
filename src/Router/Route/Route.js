import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Home/Home/Services/Services";


const router = createBrowserRouter([
    { path:'/',
    element: <Main></Main>,
    children:[
        {path:'/',
         element:<Home></Home>
        },
        {path:'/home',
         element:<Home></Home>
        },
        {path:'/service',
         element:<Services></Services>,
         loader:() => fetch('http://localhost:5000/services')
        },
    ]
    }

])

 export default router;