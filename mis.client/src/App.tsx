import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const App = () => {
    return (
        <RouterProvider router={router}/>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello route</div>
    },
]);

export default App;