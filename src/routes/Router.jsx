import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../components/Home";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import Ragister from "../pages/Ragister";
import AvailableFoods from "../components/AvailableFoods";
import AddFood from "../components/AddFood";
import MyFoods from "../components/MyFoods";
import FoodRequest from "../components/FoodRequest";
import PrivateRoute from "../provider/PrivateRoute";
import AvailableFoodDetails from "../components/AvailableFoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children:[
      {
        path: "/",
       element:<Home></Home>
      },
      {
        path:"/AvailableFoods",
       
        element:<AvailableFoods></AvailableFoods>
      },
      {
        path:"/foods/:id",
        element:<AvailableFoodDetails></AvailableFoodDetails>,
        loader: ({params}) => fetch(`http://localhost:3000/foods/${params.id}`)
      },
      {
        path:"/AddFood",

        element:<PrivateRoute>
          <AddFood></AddFood>
        </PrivateRoute>
      },
      {
        path:"/MyFoods",
        element:<PrivateRoute><MyFoods></MyFoods></PrivateRoute>
      },
      {
        path:"/FoodRequest",
        element:<PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>
      }

    ]
  },
  {
    path: "/auth",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/signup",
        element:<Ragister></Ragister>
      }
    ]
  },
  {
    path:"/*",
    element:<h2>404 error</h2>
  }
]);

export default router