import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register"
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Profile from "../components/Profile/Profile";
import Checkout from "../components/Checkout/Checkout";
import PrivateRoutes from "./PrivateRoutes";
import Contact from "../components/Contact/Contact";
import FAQ from "../components/FAQ/FAQ";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ()=> fetch('https://cybercodedev12.vercel.app/courses')
            },
            {
                path: "courses/:id",
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://cybercodedev12.vercel.app/courses/${params.id}`)

            },
            {
                path: "coursedetails/:id",
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
                loader: ({params}) => fetch(`https://cybercodedev12.vercel.app/courses/${params.id}`)
            },
            {
                path:'/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
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
                path: '/profile',
                element: <Profile></Profile>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])
