import { createBrowserRouter } from "react-router-dom";

import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
import Blog from "../../pages/Blog/Blog";
import Checkout from "../../pages/Checkout/Checkout";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Home/Home/Services/Services";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import MyReview from "../../pages/MyReview/MyReview";
import PerServiceDetails from "../../pages/SeviceDetails/PerServiceDetails";
import ServiceDetails from "../../pages/SeviceDetails/ServiceDetails";
import PriveteRoutes from "./PriveteRoutes";


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
        {path:'/login',
         element:<Login></Login>
        },
        {path:'/register',
         element:<Register></Register>
        },
        {path:'/review',
         element:<MyReview></MyReview>
        },
        {path:'/blog',
         element:<Blog></Blog>
        },
        {path:'/addService',
         element:<AddService></AddService>,
         loader: ()=>fetch('http://localhost:5000/services')
        },
        {path:'/',
         element:<PriveteRoutes><Checkout></Checkout></PriveteRoutes>,
         
        },
        {path:'/servicesDetails',
         element:<ServiceDetails></ServiceDetails>,
         loader: ()=>fetch('http://localhost:5000/services')
        },
        {path:'/service/:id',
         element:<PerServiceDetails></PerServiceDetails>,
         loader: ({params})=>fetch(`http://localhost:5000/service/${params.id}`)

        },

        {path:'/service',
         element:<Services></Services>,
         loader:() => fetch('http://localhost:5000/servicesThree')
        },
    ]
    }

])

 export default router;