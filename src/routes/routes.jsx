import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ChefLayout from "../layouts/ChefLayout";
import ChefPage from "../Pages/ChefPage/ChefPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "chef",
        element: <ChefLayout></ChefLayout>,
        children: [
            {
                path: ":id",
                element: <PrivateRoute><ChefPage></ChefPage></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }
])

export default router;