import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Testimony from "./pages/Testimony";
import Faq from "./pages/Faq";
import HomeDetail from "./pages/HomeDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":id",
        element: <HomeDetail />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "testimony",
        element: <Testimony />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
    ],
  },
]);
