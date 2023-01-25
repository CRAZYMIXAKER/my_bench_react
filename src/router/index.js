import Error from '../pages/Error';
import Available from "../pages/Available";
import LookingFor from "../pages/LookingFor";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

export const privateRoutes = [
    // {path: '/posts/:id', element: <PostIdPage/>, exact: true},
]
export const publicRoutes = [
    {path: '/available', element: <Available/>, exact: true},
    {path: '/looking-for', element: <LookingFor/>, exact: true},
    {path: '/error', element: <Error/>, exact: true},
    {path: '/login', element: <Login/>, exact: true},
    {path: '/registration', element: <Registration/>, exact: true},
]