import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Login from "../pages/login/login";
import Cars from "../pages/cars/cars";
import Main from "../pages/main/main"
import Brand from "../pages/brands/brand";
import Todos from "../pages/todos/todos";
import Albums from "../pages/albums/albums";
import Photos from "../pages/photos/photos";
import Comments from "../pages/comments/comments";
import Newcar from "../pages/newcar/newcar";
// import UserModal from "../components/modal";
const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
            <Route index element={<Login/>}/>
            <Route path="main/*" element={<Main/>}>
            <Route index element={<Cars/>}/>
            <Route path="brand" element={<Brand/>}/>
            <Route path="todos" element={<Todos/>}/>
            <Route path="albums" element={<Albums/>}/>
            <Route path="photos" element={<Photos/>}/>
            <Route path="comments" element={<Comments/>}/>
            <Route path="newcar" element={<Newcar/>}/>
            </Route>
            // </Route>
        )
    );
    return <RouterProvider router={router}/>
};
export default Index;
