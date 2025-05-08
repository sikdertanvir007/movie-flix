import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "./pages/Loading";


const router = createBrowserRouter([
{
path : "/",
element : <HomeLayout></HomeLayout>,
children : [
    {
        path : "/",
        element :<Home></Home>,
        loader : () => fetch('/movies.json'),
        hydrateFallbackElement : <Loading></Loading>,
    },
]
},
{
path : "/auth",
element : <AuthLayout></AuthLayout>,
children : [
    {
        path : "/auth/login",
        element : <Login></Login>,
    },
    {
        path : "/auth/register",
        element : <Register></Register>,
    },
]
},
{
path : "/movie-details/:id",
element : (
    <PrivateRoute>
        <MovieDetails></MovieDetails>
    </PrivateRoute>
),
loader : ()=> fetch("/movies.json"),
hydrateFallbackElement : <Loading></Loading>,
},
{
path : "/*",
element : <h2>Error404</h2>
},

]);

export default router;