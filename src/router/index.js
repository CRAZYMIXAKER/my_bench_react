import Error from '../pages/Error';
import Available from "../pages/Available";
import LookingFor from "../pages/LookingFor";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Index from "../pages/Index";
import Trial from "../pages/Trial";

export const privateRoutes = [
    // {path: '/posts/:id', element: <PostIdPage/>, exact: true},
]
export const publicRoutes = [
    {path: '/', element: <Index/>, exact: true},
    {path: '/available', element: <Available/>, exact: true},
    {path: '/looking-for', element: <LookingFor/>, exact: true},
    {path: '/error', element: <Error/>, exact: true},
    {path: '/login', element: <Login/>, exact: true},
    {path: '/registration', element: <Registration/>, exact: true},
    {path: '/trial', element: <Trial/>, exact: true},
]