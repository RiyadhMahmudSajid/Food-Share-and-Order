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
        path:"/AddFood",
        element:<AddFood></AddFood>
      },
      {
        path:"/MyFoods",
        element:<MyFoods></MyFoods>
      },
      {
        path:"/FoodRequest",
        element:<FoodRequest></FoodRequest>
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