import Home from "./Home";
import Show from "./Show";

const routes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: "/show/:id",
        element: <Show />
    }
]

export default routes;