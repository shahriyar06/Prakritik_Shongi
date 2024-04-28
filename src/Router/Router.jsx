import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../Page/Home/Home';
import Error from "../Page/Error/Error";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import MyCrafts from "../Page/MyCrafts/MyCrafts";
import PrivateRoute from "../Page/PrivateRoute/PrivateRoute";
import AddCraft from "../Page/AddCraft/AddCraft";
import AllCrafts from "../Page/AllCrafts/AllCrafts";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/allcrafts',
          element: <PrivateRoute><AllCrafts></AllCrafts></PrivateRoute>
        },
        {
          path: '/mycrafts',
          element: <PrivateRoute><MyCrafts></MyCrafts></PrivateRoute>
        },
        {
          path: '/addcraft',
          element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
        }
      ],
    },
  ]);

  export default router;