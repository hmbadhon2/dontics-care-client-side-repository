import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
import Blog from "../../pages/Blog/Blog";
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
         element:<PriveteRoutes><MyReview></MyReview></PriveteRoutes>,
         loader: () =>fetch('https://y-opal-theta.vercel.app/review')
        },
        {path:'/blog',
         element:<Blog></Blog>
        },
        {path:'/addService',
         element:<AddService></AddService>,
         loader: ()=>fetch('https://y-opal-theta.vercel.app/services')
        },
        {path:'/service',
         element:<ServiceDetails></ServiceDetails>,
         loader: ()=>fetch('https://y-opal-theta.vercel.app/services')
        },
        {path:'/service/:id',
         element:<PerServiceDetails></PerServiceDetails>,
         loader: ({params})=>fetch(`https://y-opal-theta.vercel.app/service/${params.id}`)

        },

        {path:'/',
         element:<Services></Services>,
         loader:() => fetch('https://y-opal-theta.vercel.app/servicesThree')
        },
    ]
    }

])

 export default router;